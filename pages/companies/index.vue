<template>
  <div class="companies-page-container">
    <h1 class="text-3xl bold">Companies</h1>

    <div v-if="pending">
      <p>Companies loading...</p>
    </div>

    <div v-if="error">
      <p>There was an error trying to display companies. Please try again.</p>
      <button @click="refresh()">Try again.</button>
    </div>

    <div v-if="companies" class="company-card-list">
      <CompanyCard
        v-for="company of companies"
        :key="company._id"
        v-bind="company"
      />
    </div>

    <div v-else>
      <p>No companies availables</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';
import Company from '@/models/company/types/Company';

const {
  data: companies,
  pending,
  error,
  refresh,
} = await useFetch<Company[]>('/api/companies');

useHead({
  title: `Find Companies | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `Discover top tech companies to work for today on ${companyName}.  Discover top career opportunities in the industry today and elevate your path to a successful career in tech.`,
    },
  ],
});
</script>
