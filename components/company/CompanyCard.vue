<template>
  <NuxtLink :to="`/companies/${company._id}`">
    <div class="company-card-container">
      <div class="company-card-top-container">
        <div class="company-card-logo-container">
          <img
            class="company-card-logo-image"
            :src="company.logo.url"
            :alt="company.logo.alt"
          />
        </div>
      </div>
      <div class="company-card-bottom-container">
        <div class="company-card-content-container">
          <p class="text-lg bold">{{ company.name }}</p>
          <p class="text-md">{{ company.category }}</p>
          <p class="text-md">{{ company.totalEmployees }} employees</p>
        </div>
        <button @click="(e) => followCompany(e, company._id)">Follow</button>
      </div>
    </div>
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
