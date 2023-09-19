<template>
  <div>
    <h1>Saved Jobs</h1>

    <div v-if="savedJobPosts">
      <JobPostCard
        v-for="savedJobPost of savedJobPosts"
        :key="savedJobPost._id"
        v-bind="savedJobPost.jobPost"
      />
    </div>

    <div v-if="pending">
      <p>Loading...</p>
    </div>

    <div v-if="error">
      <p>
        There was an error trying to retireve saved job posts. Please try again.
      </p>
      <button @click="refresh()">Refresh</button>
    </div>

    <div v-else>
      <p>You have no saved job posts.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import SavedJobPost from 'models/savedJobPost/types/SavedJobPosts';
import companyName from '@/utils/constants/companyName';

// Get saved job posts by the authenticated user from the server.
const {
  data: savedJobPosts,
  pending,
  error,
  refresh,
} = await useFetch<SavedJobPost[]>(`/api/saved-job-posts/authenticated-user`);

useHead({
  title: `Saved Jobs  | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
