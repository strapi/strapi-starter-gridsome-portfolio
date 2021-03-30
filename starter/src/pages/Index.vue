<template>
  <Layout>
    <div class="container">
      <h1 class="text-4xl font-semibold mt-16">{{ $page.strapi.home.title }}</h1>
      <div class="mt-2 w-full md:w-9/12">
        <RichText :data="{ content: $page.strapi.home.bio }" />
      </div>
      <h2
        class="text-2xl uppercase text-gray-600 mb-6 mt-16 tracking-wide font-semibold"
      >
        My latest projects
      </h2>
    </div>
    <!-- List of project preview cards -->
    <div class="flex flex-col gap-12">
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
      # Metadata for SEO
      seo {
        title
        description
        shareImage {
          id
          url
        }
      }
    }
    # List projects
    projects(sort: "date:desc") {
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
import { getMetaTags } from '~/utils/seo'

export default {
  methods: {
    getStrapiMedia,
  },
  components: {
    ProjectCard,
    RichText,
  },
  metaInfo() {
    const { title, description, shareImage } = this.$page.strapi.home.seo
    const image = getStrapiMedia(shareImage.url)
    return {
      title,
      meta: getMetaTags(title, description, image),
    }
  },
}
</script>

<style>
img {
  width: 100%;
  height: auto;
}
</style>
