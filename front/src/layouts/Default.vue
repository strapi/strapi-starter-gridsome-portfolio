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

<script>
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'

export default {
  components: {
    Navbar,
    Footer,
  }
}
</script>
