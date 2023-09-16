<template>
  <div v-if="jobPost" class="container">
    <div class="job-post-detail-company-cover-image-container">
      <img
        v-if="jobPost.company.coverImage"
        class="job-post-detail-company-cover-image"
        :src="jobPost.company.coverImage.url"
        :alt="jobPost.company.coverImage.alt"
      />
    </div>
    <button><font-awesome-icon icon="fa-regular fa-bookmark" /></button>
    <p>{{ jobPost.title }}</p>
    <p>
      Posted
      {{ differenceInDays(new Date(), new Date(jobPost.createdAt)) }} days ago.
    </p>
    <p>{{ jobPost.totalApplicants }} applicants</p>
    <p>
      £{{ jobPost.salary.min.toLocaleString() }} -
      {{ jobPost.salary.max.toLocaleString() }}
    </p>
    <p>{{ jobPost.contractType }}</p>
    <p>
      Closes at
      {{ format(new Date(jobPost.deadlineDate), 'hh:mm:ss, dd MMMM yyyy') }}
    </p>
    <p>{{ jobPost.locationType }}</p>

    <p v-if="jobPost.location">{{ jobPost.location.address }}</p>
    <p>{{ jobPost.company.name }}</p>
    <p>{{ jobPost.description }}</p>
  </div>

  <div v-else>
    <p>No job found.</p>
  </div>
</template>

<script setup lang="ts">
import { differenceInDays, format } from 'date-fns';
import JobPost from '@/models/jobPost/types/JobPost';

const route = useRoute();

const { id } = route.query;

const { data: jobPost } = await useFetch<JobPost | null>(
  `/api/job-posts/${id}`,
);
</script>
