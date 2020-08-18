const fs = require('fs-extra');

async function postInstall() {
  // Path of the package.json file
  const filePath = `package.json`;
  // Check if the package.json exist
  try {
    if (fs.exists(filePath)) {
      // Read the package.json inside the backend directory (strapi)
      const packageJSON = await fs.readJSON(filePath);

      // Change the uuid inside the package.json
      const newPackageJSON = {
        ...packageJSON,
        strapi: { uuid: `STRAPI-STARTER-GRIDSOME-PORTFOLIO-PRODUCTION` },
      };
      await fs.writeJson(filePath, newPackageJSON, { spaces: 2 });
    }
  } catch (e) {
    console.error(e);
  }
};

postInstall().catch(error => {
  console.error(error);
  process.exit(1);
});
