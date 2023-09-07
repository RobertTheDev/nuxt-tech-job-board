<template>
  <p>{{ jobApplication.user.emailAddress }}</p>
  <p>{{ jobApplication.jobPost.title }}</p>
</template>

<script setup lang="ts">
import JobApplication from '@/models/jobApplication/types/JobApplication';

const jobApplication = defineProps<JobApplication>();
</script>
