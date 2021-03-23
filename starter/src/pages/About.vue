<template>
  <Layout>
    <Content :content="$page.strapi.about.content" class="mt-10" />
  </Layout>
</template>

<script>
import Content from '~/components/Content'
import { getStrapiMedia } from '~/utils/medias'
import { getMetaTags } from '~/utils/seo'

export default {
  components: {
    Content,
  },
  metaInfo() {
    const { title, description, shareImage } = this.$page.strapi.about.seo
    const image = getStrapiMedia(shareImage.url)
    return {
      title,
      meta: getMetaTags(title, description, image),
    }
  },
}
</script>

<page-query>
query {
  strapi {
    about {
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
      seo {
        title
        description
        shareImage {
          id
          url
        }
      }
    }
  }
}
</page-query>
