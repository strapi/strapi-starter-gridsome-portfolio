'use strict';

const fs = require('fs');
const path = require("path");
const { categories, projects, about, home, global } = require('../data/data.json');

async function setPublicPermissions(newPermissions) {
  // Find the ID of the public role
  const publicRole = await strapi
    .query("role", "users-permissions")
    .findOne({ type: "public" });

  // List all available permissions
  const publicPermissions = await strapi
    .query("permission", "users-permissions")
    .find({ type: "application", role: publicRole.id });

  // Update permission to match new config
  const controllersToUpdate = Object.keys(newPermissions);
  const updatePromises = publicPermissions
    .filter((permission) => {
      // Only update permissions included in newConfig
      if (!controllersToUpdate.includes(permission.controller)) {
        return false;
      }
      if (!newPermissions[permission.controller].includes(permission.action)) {
        return false;
      }
      return true;
    })
    .map((permission) => {
      // Enable the selected permissions
      return strapi
        .query("permission", "users-permissions")
        .update({ id: permission.id }, { enabled: true })
    });
  await Promise.all(updatePromises);
}

function getFilesizeInBytes(filePath) {
  const stats = fs.statSync(filePath);
  const fileSizeInBytes = stats["size"];
  return fileSizeInBytes;
};

function getFileData(fileName) {
  const filePath = `./data/uploads/${fileName}`;
  
  // Parse the file metadata
  const size = getFilesizeInBytes(filePath);
  const ext = fileName.split(".").pop();
  const mimeType = `image/.${ext}`;
  
  return {
    path: filePath,
    name: fileName,
    size,
    type: mimeType,
  }
}

// Create an entry and attach files if there are any
async function createEntry(model, entry, files) {
  try {
    const createdEntry = await strapi.query(model).create(entry);
    if (files) {
      await strapi.entityService.uploadFiles(createdEntry, files, {
        model
      });
    }
  } catch (e) {
    console.log(e);
  }
}

async function importSeedData(files) {
  const getFile = (data, contentType) => {
    // Guess the file name based on model and key
    let fileNameWithoutExt = '';
    if (contentType === 'project') {
      fileNameWithoutExt = data.slug;
    } else if (contentType === 'home') {
      fileNameWithoutExt = 'global';
    } else if (contentType === 'socialNetwork') {
      fileNameWithoutExt = data.title.toLowerCase();
    }

    // Find the right file
    const fileName = files.find(file => file.includes(fileNameWithoutExt));
    return getFileData(fileName);
  };

  // Prepare categories
  const categoriesPromises = categories.map((category) => {
    return strapi.services.category.create(category);
  });

  // Prepare projects
  const projectsPromises = projects.map(async (project) => {
    const coverImage = getFile(project, 'project');
    const files = {
      coverImage,
    };
    // Check if dynamic zone has attached files
    project.content.forEach((section, index) => {
      if (section.__component === 'sections.large-media') {
        files[`content.${index}.media`] = getFileData('large-media.jpg');
      } else if (section.__component === 'sections.images-slider') {
        // All project cover images
        const sliderFiles = projects.map((project) => {
          return getFileData(`${project.slug}.jpg`);
        });
        files[`content.${index}.images`] = sliderFiles;
      }
    });
    await createEntry('project', project, files);
  });

  // Prepare global data
  const globalPromise = async () => {
    // Add favicon image
    const favicon = getFile(null, 'home');
    const files = {
      favicon,
    };
    // Add icon for each social network
    global.socialNetworks.forEach((network, index) => {
      files[`socialNetworks.${index}.icon`] = getFile(network, 'socialNetwork');
    });
    await createEntry('global', global, files);
  }

  // Prepare home page
  const homePromise = async () => {
    const shareImage = getFile(null, 'home');
    const files = {
      "seo.shareImage": shareImage,
    }
    await createEntry('home', home, files);
  };

  const aboutPromise = async () => {
    const shareImage = 
  };
  // Actually load all entries in Strapi
  await Promise.all(categoriesPromises);
  await Promise.all(projectsPromises);
  await globalPromise();
  await homePromise();
  await aboutPromise();
}

async function start() {
  // Load Strapi
  const strapi = await require('strapi')().load();

  // Allow read of application content types
  await setPublicPermissions({
    about: ['find'],
    category: ['find', 'findone'],
    global: ['find'],
    home: ['find'],
    project: ['find', 'findone'],
  });

  // Load files from upload directory
  const files = fs.readdirSync(`./data/uploads`);
  
  // Create entries
  await importSeedData(files);
  console.log('done');

  // Close Strapi to end the script
  strapi.stop(0);
};

start();