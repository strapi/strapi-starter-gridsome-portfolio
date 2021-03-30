<template>
  <div>
    <div
      v-for="contentSection in content"
      :key="contentSection.__typename + contentSection.id"
    >
      <!-- Display the right component based on type name -->
      <div v-if="contentSection.__typename === 'strapiTypes_ComponentSectionsRichText'">
        <RichText :data="contentSection" class="container" />
      </div>
      <div v-if="contentSection.__typename === 'strapiTypes_ComponentSectionsLargeMedia'">
        <LargeMedia :data="contentSection" />
      </div>
      <div v-if="contentSection.__typename === 'strapiTypes_ComponentSectionsImagesSlider'">
        <Slider :data="contentSection" />
      </div>
    </div>
  </div>
</template>

<script>
import RichText from '~/components/RichText'
import LargeMedia from '~/components/LargeMedia'
import Slider from '~/components/Slider'

export default {
  props: ["content"],
  components: {
    RichText,
    LargeMedia,
    Slider,
  }
}
</script>