<template>
  <div>
    <!-- Page Heading. -->
    <h3>My Companies</h3>
    <!-- If data is loading show a loading message -->
    <div v-if="pending">
      <p>Loading...</p>
    </div>
    <!-- If error occurs offer an explanation and refrsh button for the user to try again. -->
    <div v-if="error">
      <p>
        Failed to list companies due to an error. Please refresh to try again.
      </p>
      <button @click="refresh()">Refresh</button>
    </div>
    <!-- Map the data through the CompanyOwnerCompanyCard component. -->
    <CompanyOwnerCompanyCard
      v-for="companyOwner of companyOwners"
      :key="companyOwner._id"
      v-bind="companyOwner"
    />
  </div>
</template>

<script setup lang="ts">
// Import company owner interface for type checking.
import CompanyOwner from '../../lib/types/CompanyOwner';

// Unauthenticated middleware added to prevent unauthenticated users from accessing this page.
definePageMeta({
  middleware: 'unauthenticated',
});

// Get owned companies by the authenticated user from the server.
const {
  data: companyOwners,
  pending,
  error,
  refresh,
} = await useFetch<CompanyOwner[]>(`/api/company-owners/profile`);

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
