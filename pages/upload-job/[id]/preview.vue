<template>
  <div>
    <p>Preview</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['unauthenticated'],
});

useHead({
  title: 'Upload Job - Preview',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
