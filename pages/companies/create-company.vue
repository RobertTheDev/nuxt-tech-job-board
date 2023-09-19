<template>
  <div class="companies-page-container">
    <h1>Create company</h1>
    <CreateCompanyForm />
  </div>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

useHead({
  title: `Start Your Company | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `Ready to find candidates for your tech companies? Create your company on ${companyName} today! Our platform makes it easy to find candidates for your company, find top talent, and share your job posts with the world."`,
    },
  ],
});
</script>
