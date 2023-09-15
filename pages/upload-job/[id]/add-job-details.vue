<template>
  <div>
    <h1>Create Job Details</h1>
    <AddJobDetailsForm />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['unauthenticated'],
});

useHead({
  title: 'Upload Job - Add Details',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
