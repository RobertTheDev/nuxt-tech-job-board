<template>
  <NuxtLink :to="`/job-posts/${jobPost.id}`">
    <p>
      Posted
      {{ differenceInDays(new Date(), new Date(jobPost.createdAt)) }} days ago.
    </p>
    <p>Closes {{ format(new Date(jobPost.deadlineDate), 'd MMM yyyy') }}</p>
    <p>{{ jobPost.title }}</p>
    <p>{{ jobPost.locationType }}</p>
    <p>{{ jobPost.contractType }}</p>
    <p>
      £{{ jobPost.salary.min.toLocaleString() }} -
      {{ jobPost.salary.max.toLocaleString() }}
    </p>
    <p>{{ jobPost.description }}</p>
    <img :src="jobPost.company.logo.url" />
    <p>{{ jobPost.company.name }}</p>
    <button>Save</button>
    <button>Quick View</button>
  </NuxtLink>
</template>

<script setup lang="ts">
import { format, differenceInDays } from 'date-fns';

const jobPost = defineProps([
  'id',
  'createdAt',
  'deadlineDate',
  'title',
  'locationType',
  'salary',
  'description',
  'contractType',
  'company',
]);
</script>
