<template>
  <Layout>
    <div class="container">
      <h1 class="text-4xl font-normal mt-4">{{ $page.strapi.home.title }}</h1>
      <div class="w-full md:w-9/12 mt-2">
        <RichText :data="{ content: $page.strapi.home.bio }" />
      </div>
      <h2 class="inline-block px-2 -mx-2 text-2xl mt-6 mb-6 bg-primary-200">
        My latest projects
      </h2>
    </div>
    <!-- List of project preview cards -->
    <div class="flex flex-col gap-10">
      <ProjectCard
        v-for="project in $page.strapi.projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </Layout>
</template>

<page-query>
query {
  strapi {
    # Get homepage data
    home {
      title
      bio
    }
    # List projects
    projects {
      title
      slug
      description
      categories {
        id
        title
      }
      coverImage {
        id
        url
      }
    }
  }
}
</page-query>

<script>
import ProjectCard from '~/components/ProjectCard'
import RichText from '~/components/RichText'
import { getStrapiMedia } from '~/utils/medias'

export default {
  methods: {
    getStrapiMedia,
  },
  components: {
    ProjectCard,
    RichText,
  }
}
</script>

<style>
img {
  width: 100%;
  height: auto;
}
</style>
