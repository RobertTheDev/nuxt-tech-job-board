<template>
  <div>
    <h1>My Interviews</h1>
    <div v-if="jobInterviews">
      <JobInterviewCard
        v-for="jobInterview in jobInterviews"
        :key="jobInterview._id"
        v-bind="jobInterview"
      />
    </div>

    <div v-if="pending">
      <p>Loading...</p>
    </div>

    <div v-if="error">
      <p>There was en error.</p>
      <button @click="refresh()">Refresh</button>
    </div>

    <div v-else>
      <p>You have no job interviews.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import JobInterview from '@/models/jobInterview/types/JobInterview';

const {
  data: jobInterviews,
  pending,
  error,
  refresh,
} = await useFetch<JobInterview[]>('/api/job-interviews', { method: 'GET' });
</script>
