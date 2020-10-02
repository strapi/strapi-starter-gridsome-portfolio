<template>
  <div class="min-h-screen flex flex-col justify-between text-black">
    <!-- Content anchored to top -->
    <div>
      <Navbar />
      <slot />
    </div>
    <!-- Content anchored to bottom -->
    <Footer />
  </div>
</template>

<static-query>
query {
  strapi {
    global {
      siteName
      siteLanguage
      favicon {
        url
      }
    }
  }
}
</static-query>

<script>
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'
import { getStrapiMedia } from '~/utils/medias'

export default {
  components: {
    Navbar,
    Footer,
  },
  metaInfo() {
    const globalConfig = this.$static.strapi.global
    return {
      titleTemplate: `%s | ${globalConfig.siteName}`,
      htmlAttrs: {
        lang: globalConfig.siteLanguage,
      },
      link: [
        {
          rel: 'icon',
          href: getStrapiMedia(globalConfig.favicon.url),
        },
      ],
    }
  }
}
</script>
