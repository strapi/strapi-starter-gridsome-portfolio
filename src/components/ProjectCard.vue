<template>
  <div class="container flex flex-col md:flex-row md:gap-6">
    <g-link
      :to="'project/' + project.slug"
      class="w-full md:w-6/12 flex-shrink-0 relative"
    >
    <g-image
      :alt="project.title"
      :src="getStrapiMedia(project.coverImage.url)"
      class="w-full h-auto rounded-sm"
    />
    </g-link>
    <div class="flex flex-col justify-between py-4">
      <div>
        <g-link :to="'project/' + project.slug">
          <h3 class="text-3xl font-semibold inline-block hover:underline">
            {{ project.title }}
          </h3>
        </g-link>
        <div class="flex flex-row gap-4 py-2">
          <div
            v-for="category in project.categories"
            :key="category.id"
            class="bg-secondary-200 text-secondary-900 uppercase tracking-wide px-1 text-sm font-semibold rounded-sm"
          >
            {{ category.title }}
          </div>
        </div>
        <p>
          {{ project.description }}
        </p>
      </div>
      <g-link
        :to="'project/' + project.slug"
        :title="project.title"
        class="text-blue-700"
      >
        View project 👉
      </g-link>
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from '~/utils/medias'

export default {
  props: ['project'],
  methods: {
    getStrapiMedia,
  }
}
</script>