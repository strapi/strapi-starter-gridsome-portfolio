<template>
  <div class="container py-4">
    <p class="text-center text-xl italic mb-2">{{ data.title }}</p>
    <g-image
      :src="getStrapiMedia(data.images[parsedSelectedIndex].url)"
    />
    <div class="flex flex-row align-baseline justify-between">
      <button class="py-1" @click="rawSelectedIndex -= 1">Previous</button>
      <button class="py-1" @click="rawSelectedIndex += 1">Next</button>
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from '~/utils/medias'

export default {
  props: ['data'],
  data: () => ({
    rawSelectedIndex: 0,
  }),
  computed: {
    parsedSelectedIndex() {
      // Ensure we don't go beyond the amount of images
      return this.rawSelectedIndex % this.data.images.length
    },
  },
  methods: {
    getStrapiMedia,
  },
}
</script>
