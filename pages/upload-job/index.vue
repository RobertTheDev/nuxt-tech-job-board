<template>
  <div>
    <!-- PAGE CONTENT. -->
    <!-- Page Title. -->
    <h1>Upload A Job Post - Select A Company To Get Started</h1>
    <!-- Page Description. -->
    <p>
      Select a company this job post is for to get started. If you do not
      currently have an associated company for the job post you can quickly
      create one by selecting the create company button.
    </p>

    <CompanySelector />
  </div>
</template>

<script setup lang="ts">
// SEO Title And Description.
useHead({
  title: 'Upload A Job Post',
  meta: [
    {
      name: 'description',
      content: `
      Upload a job post today to find new talent and future employees for your 
      tech business. Set up a company and get started 
      by uploading a new job post on TechBoard.`,
    },
  ],
});
</script>
