# Strapi Starter Gridsome Portfolio

Gridsome starter for creating a corporate site with Strapi.

[View the live demo](https://strapi-starter-gridsome-portfolio.vercel.app/) • [Watch the video tutorial](https://www.youtube.com/watch?v=4g3Pzj-wdXo&feature=youtu.be) • [Read the blog post](https://strapi.io/blog/strapi-starter-gridsome-portfolio)

[![screen](/screenshot.png)](https://strapi-starter-gridsome-portfolio.vercel.app/)

This starter allows you to easily create a website to showcase your work. It also makes it easy to keep it up to date thanks to Strapi.

It relies on several Strapi features:

* Collection types for projects and categories
* Single types for the homepage, the about page and the global config
* Components for reusable UI components and SEO metadata
* Dynamic zones to have full control over your content

On the frontend, we're using [Gridsome](https://gridsome.org/), a Vue.js framework for static sites. It uses GraphQL to query data and Tailwind CSS for styles.

## Getting started

Use our `create-strapi-starter` CLI to create your project.

```sh
# Using Yarn
yarn create strapi-starter my-project gridsome-portfolio

# Or using NPM
npx create-strapi-starter my-project gridsome-portfolio
```

The CLI will create a monorepo, install dependencies, and run your project automatically.

The Gridsome frontend server will run here => [http://localhost:8080](http://localhost:8080)

The Strapi backend server will run here => [http://localhost:1337](http://localhost:1337)

## Deploying to production

You will need to deploy the `frontend` and `backend` projects separately. Here are the docs to deploy each one:

- [Deploy Strapi](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment.html#hosting-provider-guides)
- [Deploy Gridsome](https://gridsome.org/docs/deployment/)

Don't forget to setup the environment variables on your production app:

For the frontend the following environment variable is required: 
- `GRIDSOME_STRAPI_URL`: URL of your Strapi backend, without trailing slash


Enjoy this starter!
