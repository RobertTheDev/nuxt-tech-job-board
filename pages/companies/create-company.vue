<template>
  <div>
    <p>Create Company</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'unauthenticated',
});

useHead({
  title: 'Create Company',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
