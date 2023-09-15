<template>
  <div>
    <h3>My Companies</h3>
    <NuxtLink to="/companies/create-company">Create Company</NuxtLink>
    <div v-if="pending">
      <p>Loading...</p>
    </div>
    <CompanyOwnerCard
      v-for="companyOwner in companyOwners"
      :key="companyOwner._id"
      v-bind="companyOwner"
    />
    <div v-if="error">
      <p>
        Failed to list companies due to an error. Please refresh to try again.
      </p>
      <button @click="refresh()">Refresh</button>
    </div>

    <div v-if="companyOwners?.length === 0">
      <p>You currently have no companies set up.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import CompanyOwner from '@/models/companyOwner/types/CompanyOwner';

// Get owned companies by the authenticated user from the server.
const {
  data: companyOwners,
  pending,
  error,
  refresh,
} = await useFetch<CompanyOwner[]>(`/api/company-owners/authenticated-user`);

definePageMeta({
  middleware: ['unauthenticated'],
});

// Add seo title and description for this page.
useHead({
  title: 'My Companies',
  meta: [
    {
      name: 'description',
      content: `Explore the companies you've created on TechBoard. Create new companies and manage existing ones seamlessly. Optimize your hiring process and attract top talent for your job openings.`,
    },
  ],
});
</script>
