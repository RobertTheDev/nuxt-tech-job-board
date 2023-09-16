<template>
  <div v-if="jobApplication">
    <p>Job Application Detail</p>
    <p>{{ jobApplication.jobPost.title }}</p>
    <p>{{ jobApplication.user.emailAddress }}</p>
  </div>
  <div v-else>
    <p>No job appliation.</p>
  </div>
</template>

<script setup lang="ts">
import JobApplication from '@/models/jobApplication/types/JobApplication';

const jobApplication = defineProps<JobApplication | null>();
</script>
