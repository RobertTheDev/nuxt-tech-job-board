<template>
  <div class="job-post-card-container">
    <div class="job-post-card-header-container">
      <div class="job-post-card-company-logo-container">
        <img
          :src="jobPost.company.logo.url"
          :alt="jobPost.company.logo.alt"
          class="job-post-card-company-logo-image"
        />
      </div>
      <div class="job-post-card-header-content-container">
        <p class="text-md bold">{{ jobPost.title }}</p>
        <p class="text-sm">{{ jobPost.company.name }}</p>
      </div>
    </div>
    <div class="job-post-card-content-container">
      <p class="text-sm bold">
        Posted
        {{
          formatDistanceToNow(new Date(jobPost.createdAt), {
            addSuffix: true,
          })
        }}
      </p>

      <div class="job-detail-group">
        <div class="job-post-card-detail-group">
          <div class="job-post-card-detail-container">
            <p class="text-xs bold">{{ jobPost.locationType }}</p>
          </div>
          <div class="job-post-card-detail-container">
            <p class="text-xs bold">{{ jobPost.contractType }}</p>
          </div>
        </div>
        <p class="text-xs bold">
          £{{ jobPost.salary.min.toLocaleString() }} -
          {{ jobPost.salary.max.toLocaleString() }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDistanceToNow } from 'date-fns';
import JobPost from '@/models/jobPost/types/JobPost';

const jobPost = defineProps<JobPost>();
</script>
