<template>
  <div>
    <div v-html="data.content" />
  </div>
</template>

<script>
export default {
  props: ["data"],
}
</script>