<template>
  <div class="candidate-page-container">
    <h1 class="text-3xl bold">Candidates</h1>
    <CandidateCardList />
  </div>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

useHead({
  title: `Find Candidates | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `Discover top candidates to work for your company today on ${companyName}.  Discover top talent in the tech industry today and find successful candidates to develop and grow your business.`,
    },
  ],
});
</script>
