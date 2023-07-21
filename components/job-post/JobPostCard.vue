<template>
  <div
    class="job-post-card-container"
    role="presentation"
    @click="navigateToJobPost(jobPost.id)"
    @keydown.enter="navigateToJobPost(jobPost.id)"
  >
    <div class="job-post-card-company-container">
      <div class="job-post-card-company-logo-container">
        <img
          :src="jobPost.company.logo.url"
          :alt="jobPost.company.logo.alt"
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
    <div>
      <font-awesome-icon icon="fa-regular fa-bookmark" />
    </div>
    <p>{{ jobPost.title }}</p>
    <div class="job-post-card-details-container">
      <p>{{ jobPost.locationType }}</p>
      <p>{{ jobPost.contractType }}</p>
    </div>

    <p>
      £{{ jobPost.salary.min.toLocaleString() }} -
      {{ jobPost.salary.max.toLocaleString() }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { differenceInDays } from 'date-fns';

const router = useRouter();

function navigateToJobPost(id: string) {
  router.replace({ name: '', query: { id } });
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
