<template>
  <div>
    <h1>Company Job Posts</h1>

    <div v-if="companyJobPosts">
      <JobPostCard
        v-for="companyJobPost of companyJobPosts"
        :key="companyJobPost._id"
        v-bind="companyJobPost"
      />
    </div>

    <div v-if="pending">
      <p>Company jobs loading...</p>
    </div>

    <div v-if="error">
      <p>
        There was an error trying to display company jobs. Please try again.
      </p>
      <button @click="refresh()">Try again.</button>
    </div>

    <div v-else>
      <p>No new company jobs.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';
import JobPost from '@/models/jobPost/types/JobPost';

const route = useRoute();

const { id } = route.params;

const {
  data: companyJobPosts,
  pending,
  error,
  refresh,
} = await useFetch<JobPost[]>(`/api/job-posts/company/${id}`);

useHead({
  title: `Company Jobs | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
