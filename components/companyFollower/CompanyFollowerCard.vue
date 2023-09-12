<template>
  <NuxtLink :to="`/companies/${companyFollower.company._id}`">
    <div>
      <img
        :src="companyFollower.company.logo.url"
        :alt="companyFollower.company.logo.alt"
      />
    </div>
    <p>{{ companyFollower.company.name }}</p>
    <p>{{ companyFollower.company.totalEmployees }}</p>
    <p>{{ companyFollower.company.category }}</p>
    <p>{{ companyFollower.company.description }}</p>
  </NuxtLink>
</template>

<script setup lang="ts">
import CompanyFollower from '@/models/companyFollower/types/CompanyFollower';

const companyFollower = defineProps<CompanyFollower>();
</script>
