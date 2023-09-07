<template>
  <div>
    <h3>Saved Jobs</h3>
    <p v-if="pending">Loading...</p>
    <div v-if="error">
      <p>
        There was an error trying to retireve saved job posts. Please try again.
      </p>
      <button @click="refresh()">Refresh</button>
    </div>

    <JobPostCard
      v-for="savedJobPost of savedJobPosts"
      :key="savedJobPost._id"
      v-bind="savedJobPost.jobPost"
    />
  </div>
</template>

<script setup lang="ts">
import SavedJobPost from 'models/savedJobPost/types/SavedJobPosts';

definePageMeta({
  middleware: 'unauthenticated',
});

// Get saved job posts by the authenticated user from the server.
const {
  data: savedJobPosts,
  pending,
  error,
  refresh,
} = await useFetch<SavedJobPost[]>(`/api/saved-job-posts/authenticated-user`);

useHead({
  title: 'Saved Jobs',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
../../models/types/SavedJobPosts ../../utils/types/SavedJobPosts
