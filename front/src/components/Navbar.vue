<template>
  <header class="flex flex-row container justify-between py-4 items-baseline">
    <g-link to="/" class="text-xl font-bold">
      {{ $static.metadata.siteName }}
    </g-link>
    <nav class="flex flex-row items-baseline justify-end">
      <g-link class="font-medium" to="/about/">About</g-link>
    </nav>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>