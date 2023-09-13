<template>
  <div>
    <h1>Job Posts</h1>
    <div>
      <JobPostCard
        v-for="jobPost in jobPosts"
        :key="jobPost._id"
        v-bind="jobPost"
      />
    </div>
    <div v-if="pending">
      <p>Loading...</p>
    </div>
    <div v-if="error">
      <p>There was en error.</p>
      <button @click="refresh()">Refresh</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import JobPost from '@/models/jobPost/types/JobPost';

const {
  data: jobPosts,
  pending,
  error,
  refresh,
} = await useFetch<JobPost[]>('/api/job-posts');

useHead({
  title: 'Job Posts',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
