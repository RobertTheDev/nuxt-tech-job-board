<template>
  <div>
    <h1>Job Offers</h1>
  </div>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

useHead({
  title: `Job Offers | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
