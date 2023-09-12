<template>
  <!-- Show this when company fetch is loading. -->
  <div v-if="pending">
    <p>Companies loading...</p>
  </div>

  <!-- Show this when company fetch returns an error. -->
  <div v-if="error">
    <p>There was an error trying to display companies. Please try again.</p>
    <button @click="refresh()">Try again.</button>
  </div>

  <!-- Show this when companies are successfully fetched. -->

  <div v-if="companies" class="company-card-list">
    <CompanyCard
      v-for="company of companies"
      :key="company._id"
      v-bind="company"
    />
  </div>

  <!-- Show this when no companies are returned from the fetch. -->
  <div v-else>
    <p>No companies availables</p>
  </div>
</template>

<script setup lang="ts">
import Company from '@/models/company/types/Company';

const {
  data: companies,
  pending,
  error,
  refresh,
} = await useFetch<Company[]>('/api/companies');
</script>

<style lang="scss" scoped></style>
