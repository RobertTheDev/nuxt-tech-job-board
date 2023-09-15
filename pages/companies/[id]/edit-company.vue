<template>
  <div>
    <h1>Edit Company</h1>
    <div v-if="pending"><p>Pending...</p></div>
    <CompanyEditCompanyForm v-if="company" v-bind="company" />
    <div v-if="error">
      <p>Could not find the company. Please try again.</p>
      <button @click="refresh()">Try again</button>
    </div>
    <div v-else>
      <p>Could not find the company. Please try again.</p>
      <button @click="refresh()">Try again</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Company from 'models/company/types/Company';

definePageMeta({
  middleware: ['unauthenticated'],
});

useHead({
  title: 'Edit Company',
  meta: [
    {
      name: 'description',
      content: 'To edit your company',
    },
  ],
});

const route = useRoute();

const { slug } = route.params;

const {
  data: company,
  pending,
  error,
  refresh,
} = await useFetch<Company | null>(`/api/companies/${slug}`);
</script>
