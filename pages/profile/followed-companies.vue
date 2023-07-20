<template>
  <div>
    <p>Followed Companies</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'unauthenticated',
});

useHead({
  title: 'Followed Companies',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
