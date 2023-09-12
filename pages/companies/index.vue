<template>
  <div class="companies-page-container">
    <h1 class="text-3xl bold">Companies</h1>
    <CompanyCardList />
  </div>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

useHead({
  title: `Find Companies | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `Discover top tech companies to work for today on ${companyName}.  Discover top career opportunities in the industry today and elevate your path to a successful career in tech.`,
    },
  ],
});
</script>
