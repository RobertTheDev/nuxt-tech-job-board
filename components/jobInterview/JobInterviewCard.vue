<template>
  <p>{{ jobInterview.jobPost.title }}</p>
  <p>{{ jobInterview._id }}</p>
</template>

<script setup lang="ts">
import JobInterview from '@/models/jobInterview/types/JobInterview';

const jobInterview = defineProps<JobInterview>();
</script>
