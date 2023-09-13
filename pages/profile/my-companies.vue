<template>
  <div class="page-container">
    <!-- Page Heading. -->
    <h3>My Companies</h3>
    <button @click="openGlobalModal('createCompany')">Create Company</button>
    <!-- If data is loading show a loading message -->
    <div v-if="pending">
      <p>Loading...</p>
    </div>
    <div v-if="companyOwners?.length === 0">
      <p>You currently have no companies set up.</p>
    </div>
    <!-- If error occurs offer an explanation and refrsh button for the user to try again. -->
    <div v-if="error">
      <p>
        Failed to list companies due to an error. Please refresh to try again.
      </p>
      <button @click="refresh()">Refresh</button>
    </div>
    <div class="cards-container">
      <!-- Map the data through the CompanyOwnerCompanyCard component. -->
      <CompanyOwnerCompanyCard
        v-for="companyOwner of companyOwners"
        :key="companyOwner._id"
        v-bind="companyOwner"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CompanyOwner from '@/models/companyOwner/types/CompanyOwner';
import { useGlobalModalStore } from '@/store/useGlobalModal';

const { openGlobalModal } = useGlobalModalStore();

// Get owned companies by the authenticated user from the server.
const {
  data: companyOwners,
  pending,
  error,
  refresh,
} = await useFetch<CompanyOwner[]>(`/api/company-owners/authenticated-user`);

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

<style lang="scss" scoped>
.page-container {
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.cards-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
</style>
