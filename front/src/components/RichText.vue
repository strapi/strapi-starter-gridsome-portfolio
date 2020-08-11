<template>
  <div class="py-4">
    <Markdown :source="data.content" class="mx-auto prose md:prose-lg" />
  </div>
</template>

<script>
import Markdown from 'vue-markdown'

export default {
  props: ["data"],
  components: {
    Markdown,
  }
}
</script>