<template>
  <div class="companies-page-container">
    <!-- Page Title. -->
    <h1>Companies</h1>
    <div class="spacer" />

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
    <div v-if="companies" class="company-card-grid-container">
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
  </div>
</template>

<script setup lang="ts">
import Company from 'models/company/types/Company';

// Import company type.

// Use Nuxt Fetch to retrieve the companies data.
const {
  data: companies,
  pending,
  error,
  refresh,
} = await useFetch<Company[]>('/api/companies');

// Companies page SEO title and description.
useHead({
  title: 'Companies',
  meta: [
    {
      name: 'description',
      content:
        'Discover top tech companies to work for today on TechBoard.  Discover top career opportunities in the industry today and elevate your path to a successful career in tech.',
    },
  ],
});
</script>

<style lang="scss" scoped>
.companies-page-container {
  padding: 3.2rem;
}

.spacer {
  height: 3.2rem;
}
.company-card-grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.2rem;
}
</style>
