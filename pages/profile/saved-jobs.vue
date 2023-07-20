<template>
  <div>
    <p>Saved Jobs</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'unauthenticated',
});

useHead({
  title: 'Saved Jobs',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
