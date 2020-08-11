<template>
  <div>
    <g-image
      :alt="data.description"
      :src="getMediaUrl(data.media.url)"
    />
    <p>{{ data.description }}</p>
  </div>
</template>

<script>
import { getMediaUrl } from '~/utils/medias'

export default {
  props: ['data'],
  methods: {
    getMediaUrl,
  }
}
</script>

<style>
img {
  width: 100vw;
  height: auto;
}
</style>