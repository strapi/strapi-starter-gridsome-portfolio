<template>
  <div class="py-6 container">
    <div
      class="bg-secondary-200 rounded-lg w-full md:w-8/12 mx-auto  py-4 px-4 flex flex-row justify-between items-center"
    >
      <p class="text-secondary-900">{{ data.title }}</p>
      <a
        class="border-2 border-secondary-700 text-secondary-700 text-whites rounded-md px-2 py-1"
        :href="getStrapiMedia(data.file.url)"
        :download="data.file.name"
      >
        Download
      </a>
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from '~/utils/medias'

export default {
  props: ['data'],
  methods: {
    getStrapiMedia,
  }
}
</script>