# Strapi Starter Gridsome Portfolio

Gridsome starter for creating a corporate site with Strapi.

![screen](medias/screen-website.png)

This starter allows you to easily create a website to showcase your work. It also makes it easy to keep it up to date thanks to Strapi.

It relies on several Strapi features:

* Collection types for projects and categories
* Single types for the homepage, the about page and the global config
* Components for reusable UI components and SEO metadata
* Dynamic zones to have full control over your content

On the frontend, we're using [Gridsome](https://gridsome.org/), a Vue.js framework for static sites. It uses GraphQL to query data and Tailwind CSS for styles.

## Getting started

Clone the repository:

```
git clone https://github.com/strapi/strapi-starter-gridsome-portfolio.git
cd strapi-starter-gridsome-portfolio
```

### Backend

Make sure you're in the `backend` directory:

```bash
cd backend
```

Install dependencies and run your server:

```bash
# Using yarn
yarn install
yarn develop

# Using npm
npm install
npm run develop
```

The first time you start your project, sample seed data will be imported.

### Frontend

Make sure you're in the `frontend` directory:

```bash
cd frontend
```

Copy the `.env.example` to a `.env` file:

```bash
cp .env.example .env
```

Finally, install dependencies and start the Gridsome server:

```bash
# Using yarn
yarn install
yarn develop

# Using npm
npm install
npm run develop
```

The Gridsome server will run here => [http://localhost:8080](http://localhost:8080)

Have fun using this starter!
