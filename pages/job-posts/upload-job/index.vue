<template>
  <div>
    <h1>Upload A Job Post</h1>
    <p>
      Select a company this job post is for to get started. If you do not
      currently have an associated company for the job post you can quickly
      create one by selecting the create company button.
    </p>
    <button @click="openCreateCompanyModal">Create Company</button>
    <CompanyCreateCompanyModal v-if="createCompanyModal.active" />
    <div v-for="company of companies" :key="company.id">
      <p>{{ company.name }}</p>
      <img :src="company.logo.url" :alt="company.logo.alt" />
    </div>
    <button @click="navigateToNextStep">Next</button>
  </div>
</template>

<script setup lang="ts">
import createCompanyModalStore from '@/store/useCreateCompanyModalStore';
import companiesData from '@/lib/data/companies';

definePageMeta({
  middleware: 'unauthenticated',
});

const companies = companiesData;

const router = useRouter();

function navigateToNextStep() {
  router.push('/job-posts/upload-job/1/add-title');
}

const { createCompanyModal, openCreateCompanyModal } =
  createCompanyModalStore();

useHead({
  title: 'Upload Job',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
store/useCreateCompanyModalStore
