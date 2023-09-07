<template>
  <div class="container">
    <div class="job-post-card-sidebar">
      <div v-if="pending">
        <p>Loading...</p>
      </div>
      <div v-if="error">
        <p>Error</p>
        <button @click="refresh()">Refetch</button>
      </div>
      <div class="job-post-card-sidebar-list">
        <JobPostCard
          v-for="jobPost in jobPosts"
          :key="jobPost._id"
          v-bind="jobPost"
        />
      </div>
    </div>

    <JobPostDetails />
  </div>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';
import JobPost from '@/models/jobPost/types/JobPost';

const {
  data: jobPosts,
  pending,
  error,
  refresh,
} = await useFetch<JobPost[]>('/api/job-posts');

useHead({
  title: `Job Search | ${companyName} `,
  meta: [
    {
      name: 'description',
      content: `Welcome to ${companyName} - an online platform for finding tech jobs. Explore a diverse range of remote job opportunities in the tech industry on our cutting-edge platform. ${companyName} is dedicated to connecting talented professionals like you with remote positions in programming, software development, web design, and beyond. Discover the perfect work-from-home job that matches your skills and aspirations. Join our thriving community of remote tech enthusiasts and unlock endless possibilities for growth and success. Embrace the future of work and kickstart your rewarding tech career with ${companyName} today.`,
    },
  ],
});
</script>
