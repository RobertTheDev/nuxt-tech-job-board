<template>
  <div>
    <img :src="company.logo.url" :alt="company.logo.alt" />
  </div>
  <p>{{ company.name }}</p>
  <p>{{ company.description }}</p>
  <p>{{ company.category }}</p>
  <p>{{ company.totalEmployees }} employees</p>
  <div v-for="owner of company.owners" :key="owner._id">
    <p>{{ owner.firstName }}</p>
    <p>{{ owner.lastName }}</p>
  </div>
  <h4>Job Posts</h4>

  <p v-for="jobPost in company.jobPosts" :key="jobPost._id">
    {{ jobPost.title }}
  </p>
</template>

<script setup lang="ts">
import Company from '@/models/company/types/Company';

const company = defineProps<Company>();
</script>
