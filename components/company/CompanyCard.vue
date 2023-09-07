<template>
  <NuxtLink class="company-card-container" :to="`/companies/${company._id}`">
    <div class="company-card-logo-container">
      <img
        :src="company.logo.url"
        :alt="company.logo.alt"
        class="company-card-logo-image"
      />
    </div>
    <p>{{ company.name }}</p>
    <p>{{ company.totalEmployees }}</p>
    <p>{{ company.category }}</p>
    <p>{{ company.description }}</p>
    <button @click="(e) => followCompany(e, company._id)">Follow</button>
  </NuxtLink>
</template>

<script setup lang="ts">
import CompanyFollower from '@/models/companyFollower/types/CompanyFollower';
import Company from '@/models/company/types/Company';

const company = defineProps<Company>();

async function followCompany(e: MouseEvent, id: string) {
  e.preventDefault();

  await useFetch<CompanyFollower[]>(`/api/company-followers/company/${id}`, {
    method: 'POST',
  });
}
</script>
