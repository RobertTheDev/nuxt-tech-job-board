<template>
  <div>
    <h1>My Applications</h1>
    <div v-if="jobApplications">
      <JobApplicationCard
        v-for="jobApplication in jobApplications"
        :key="jobApplication._id"
        v-bind="jobApplication"
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
import JobApplication from '@/models/jobApplication/types/JobApplication';

const {
  data: jobApplications,
  pending,
  error,
  refresh,
} = await useFetch<JobApplication[]>('/api/job-applications', {
  method: 'GET',
});

useHead({
  title: 'My Applications',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
