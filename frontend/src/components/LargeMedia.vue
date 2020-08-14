<template>
  <div class="py-4">
    <g-image
      :alt="data.description"
      :src="getStrapiMedia(data.media.url)"
      v-if="data.media.mime.startsWith('image')"
    />
    <video controls v-if="data.media.mime.startsWith('video')">
      <source :src="data.media.url" :type="data.media.mime" />
    </video>
    <p class="text-center text-lg italic mt-2">{{ data.description }}</p>
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
