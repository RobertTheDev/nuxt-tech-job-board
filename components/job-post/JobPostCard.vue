<template>
  <div @click="navigateToJobPost(jobPost.id)" class="job-post-card-container">
    <div class="job-post-card-container">
      <div class="job-post-card-company-container">
        <div class="job-post-card-company-logo-container">
          <img
            :src="jobPost.company.logo.url"
            class="job-post-card-company-logo-image"
          />
        </div>
        <div class="job-post-card-company-content-container">
          <p>{{ jobPost.company.name }}</p>
          <p>
            Posted
            {{ differenceInDays(new Date(), new Date(jobPost.createdAt)) }} days
            ago.
          </p>
        </div>
      </div>

      <p>{{ jobPost.title }}</p>
      <div class="job-post-card-details-container">
        <p>{{ jobPost.locationType }}</p>
        <p>{{ jobPost.contractType }}</p>
      </div>

      <font-awesome-icon icon="fa-regular fa-bookmark" />
      <p>
        £{{ jobPost.salary.min.toLocaleString() }} -
        {{ jobPost.salary.max.toLocaleString() }}
      </p>
      <div class="job-post-card-buttons-container">
        <button class="job-post-card-save-button">Save</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { differenceInDays } from 'date-fns';

const router = useRouter();

function navigateToJobPost(id: string) {
  router.push(`/job-posts/${id}`);
}

const jobPost = defineProps([
  'id',
  'createdAt',
  'title',
  'locationType',
  'salary',
  'contractType',
  'company',
]);
</script>
