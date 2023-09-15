<template>
  <div>
    <h1>Step 6: Add Description</h1>
    <p>Now lets add some details about the job post.</p>
    <AddDescriptionForm />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['unauthenticated'],
});

useHead({
  title: 'Upload Job - Add Description',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
