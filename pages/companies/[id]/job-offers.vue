<template>
  <div>
    <p>job offers</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['unauthenticated'],
});

useHead({
  title: 'Job Offers',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
