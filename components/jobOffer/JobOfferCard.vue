<template>
  <p>{{ jobOffer.jobPost.title }}</p>
  <p>{{ jobOffer._id }}</p>
</template>

<script setup lang="ts">
import JobOffer from '@/models/jobOffer/types/JobOffer';

const jobOffer = defineProps<JobOffer>();
</script>
