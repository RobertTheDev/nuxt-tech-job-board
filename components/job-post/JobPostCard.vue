<template>
  <NuxtLink :to="`/job-posts/${jobPost.id}`">
    <p>{{ jobPost.title }}</p>
  </NuxtLink>
</template>

<script setup lang="ts">
const jobPost = defineProps(['id', 'title']);
</script>
