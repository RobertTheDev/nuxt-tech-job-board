<template>
  <div>
    <h1>Add Salary</h1>
    <AddSeoForm />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['unauthenticated'],
});

useHead({
  title: 'Upload Job - Add Seo',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
