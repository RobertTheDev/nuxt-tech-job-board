<template>
  <NuxtLink
    class="company-card-container"
    :to="`/companies/${companyFollower.company._id}`"
  >
    <div class="company-card-logo-container">
      <img
        :src="companyFollower.company.logo.url"
        :alt="companyFollower.company.logo.alt"
        class="company-card-logo-image"
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
