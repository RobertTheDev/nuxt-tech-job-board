<template>
  <div>
    <h1>Upload A Job Post</h1>
    <p>
      Select a company this job post is for to get started. If you do not
      currently have an associated company for the job post you can quickly
      create one by selecting the create company button.
    </p>
    <button @click="openCreateCompanyModal">Create Company</button>
    <div v-if="createCompanyModal.active">
      <button @click="closeCreateCompanyModal">Close</button>
      <p>Create Company</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCreateCompanyModalStore from '@/store/createCompanyModalStore';

const { createCompanyModal, openCreateCompanyModal, closeCreateCompanyModal } =
  useCreateCompanyModalStore();

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
