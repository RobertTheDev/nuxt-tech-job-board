<template>
  <div v-if="jobInterview">
    <p>{{ jobInterview.jobPost.title }}</p>
    <p>{{ jobInterview._id }}</p>
  </div>

  <div v-else>
    <p>No Job Interview</p>
  </div>
</template>

<script setup lang="ts">
import JobInterview from '@/models/jobInterview/types/JobInterview';

const jobInterview = defineProps<JobInterview | null>();
</script>
