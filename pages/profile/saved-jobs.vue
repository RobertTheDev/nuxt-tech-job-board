<template>
  <div>
    <h3>Saved Jobs</h3>
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
