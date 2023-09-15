<template>
  <div class="company-card-container">
    <div class="company-card-top-container">
      <div class="company-card-logo-container">
        <img
          class="company-card-logo-image"
          :src="companyOwner.company.logo.url"
          :alt="`Company logo of ${companyOwner.company.name}`"
        />
      </div>
    </div>
    <div class="company-card-bottom-container">
      <div class="company-card-content-container">
        <p class="text-lg bold">{{ companyOwner.company.name }}</p>
        <p class="text-md">{{ companyOwner.company.category }}</p>
        <p class="text-md">
          {{ companyOwner.company.totalEmployees }} employees
        </p>
      </div>
    </div>
    <button
      @click="
        () => router.push(`/companies/${companyOwner.company._id}/edit-company`)
      "
    >
      Edit Company
    </button>
    <button @click="(e) => deleteCompanyOwnerById(e, companyOwner._id)">
      Delete company
    </button>
  </div>
</template>

<script setup lang="ts">
import CompanyOwner from '@/models/companyOwner/types/CompanyOwner';

const router = useRouter();

const companyOwner = defineProps<CompanyOwner>();

async function deleteCompanyOwnerById(
  e: MouseEvent,
  id: string,
): Promise<void> {
  e.preventDefault();

  await useFetch<string>(`/api/company-owners/${id}`, {
    method: 'DELETE',
  });
}
</script>
