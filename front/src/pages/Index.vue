<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <h1>Strapi Gridsome</h1>
    <g-link
      v-for="project in $page.strapi.projects"
      :key="project.id"
      :to="'project/' + project.slug"
    >
      {{ project.title }}
      <g-image
        :alt="project.title"
        :src="getMediaUrl(project.coverImage.url)"
      />
    </g-link>

  </Layout>
</template>

<page-query>
query {
  strapi {
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
import { getMediaUrl } from '~/utils/medias'

export default {
  methods: {
    getMediaUrl,
  }
}
</script>

<style>
img {
  width: 100%;
  height: auto;
}
</style>
