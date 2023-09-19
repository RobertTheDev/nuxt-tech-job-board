<template>
  <div>
    <h1>Step 1: Add Title</h1>
    <p>Now lets add some details about the job post.</p>

    <AddTitleForm />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Upload Job - Add Title',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
