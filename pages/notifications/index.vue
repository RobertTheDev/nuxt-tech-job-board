<template>
  <div>
    <h1>Notifications</h1>
  </div>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

useHead({
  title: `Notifications | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `Your notifications on ${companyName} will appear here. Notifications will keep you up to date on job offers and application updates.`,
    },
  ],
});
</script>
