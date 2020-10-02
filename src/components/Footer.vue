<template>
  <footer class="mt-24 pt-8 pb-8 bg-gray-200">
    <p class="container text-xl font-medium">
      {{ $static.strapi.global.siteName }}
    </p>
    <div class="container mt-6 flex flex-col-reverse md:flex-row justify-between gap-6 md:gap-0">
      <!-- Site name, contact email and copyright -->
      <div class="flex flex-col gap-2">
        <p>{{ $static.strapi.global.contactEmail }}</p>
        <p class="text-gray-600">
          Copyright {{ new Date().getFullYear() }}
        </p>
      </div>
      <!-- Site pages -->
      <ul class="flex flex-col gap-2">
        <li
          v-for="page in pages" 
          :key="page.path"
        >
          <g-link
            :to="page.path"
            class="py-1"
          >
            {{ page.title }}
          </g-link>
        </li>
      </ul>
      <!-- Social network links -->
      <ul class="flex flex-col gap-1 md:-mt-1">
        <li
          v-for="socialNetwork in $static.strapi.global.socialNetworks" 
          :key="socialNetwork.id"
        >
          <a
            :href="socialNetwork.url"
            target="_blank"
            rel="noopener noreferrer"
            class="py-1 flex flex-row items-center gap-2"
          >
            <img
              :src="getStrapiMedia(socialNetwork.icon.url)"
              :alt="socialNetwork.title"
              class="w-4"
            />
            <span>{{ socialNetwork.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { getStrapiMedia } from '~/utils/medias'

export default {
  methods: {
    getStrapiMedia,
  },
  computed: {
    pages() {
      // Select random project index
      const { projects } = this.$static.strapi
      const randomIndex = Math.floor(Math.random() * projects.length)
      return [
        {
          title: 'Home',
          path: '/',
        },
        {
          title: 'About',
          path: '/about',
        },
        {
          title: 'Random project',
          path: `/project/${projects[randomIndex].slug}`,
        }
      ]
    },
  }
}
</script>

<static-query>
query {
  strapi {
    global {
      siteName
      contactEmail
      socialNetworks {
        id
        url
        title
        icon {
          id
          url
        }
      }
    }
    projects {
      id
      slug
    }
  }
}
</static-query>
