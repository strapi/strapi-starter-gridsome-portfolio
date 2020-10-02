<template>
  <Layout>
    <div class="container">
      <div class="prose md:prose-lg mx-auto mt-10">
        <h1>
          {{ $page.strapi.projects[0].title }}
        </h1>
        <p class="font-medium">{{ $page.strapi.projects[0].description }}</p>
        <g-image
          :alt="$page.strapi.projects[0].title"
          :src="getStrapiMedia($page.strapi.projects[0].coverImage.url)"
        />
      </div>
    </div>
    <Content :content="$page.strapi.projects[0].content" class="mt-8" />
  </Layout>
</template>

<page-query>
query ($slug: String!) {
  strapi {
    projects(where: { slug: $slug }) {
      id
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
      content {
        __typename
        ... on strapiTypes_ComponentSectionsRichText {
          id
          content
        }
        ... on strapiTypes_ComponentSectionsLargeMedia {
          id
          media {
            id
            url
            mime
          }
          description
        }
        ... on strapiTypes_ComponentSectionsImagesSlider {
          id
          title
          images {
            id
            url
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Content from '~/components/Content'
import { getStrapiMedia } from '~/utils/medias'
import { getMetaTags } from '~/utils/seo'

export default {
  methods: {
    getStrapiMedia,
  },
  components: {
    Content,
  },
  metaInfo() {
    const { title, description, coverImage } = this.$page.strapi.projects[0]
    const image = getStrapiMedia(coverImage.url)
    return {
      title,
      meta: getMetaTags(title, description, image),
    }
  },
}
</script>
