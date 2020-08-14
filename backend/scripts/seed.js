'use strict';

const fs = require('fs');
const path = require("path");
const { categories, projects } = require('../data/data.json');

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

// Go through dynamic zone components and upload files
function uploadDynamicZoneFiles(content) {
  // TODO: go through each component of a dynamic zone
  // and check if any files need to be uploaded
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
  const getFile = (data, model, key) => {
    // Guess the file name based on model and key
    let fileNameWithoutExt = '';
    if (model === 'project') {
      fileNameWithoutExt = data.slug;
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
        files[`content[${index}].media`] = getFileData('large-media.jpg');
      }
    });
    await createEntry('project', project, files);
  });

  // Actually load all entries in Strapi
  await Promise.all(categoriesPromises);
  await Promise.all(projectsPromises);
}

async function start() {
  // Load Strapi
  const strapi = await require('strapi')().load();

  // Load files from upload directory
  const files = fs.readdirSync(`./data/uploads`);
  
  // Create entries
  await importSeedData(files);
  console.log('done');

  // Close Strapi to end the script
  strapi.stop();
};

start();