<template>
  <div>
    <p>Profile</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'unauthenticated',
});

useHead({
  title: 'Profile',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
