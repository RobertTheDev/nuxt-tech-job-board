<template>
  <div>
    <h1>Edit Company</h1>
    <p>To edit your company</p>
    <div v-if="pending"><p>Pending...</p></div>
    <div v-if="company">
      <input :placeholder="company.name" />
      <input :placeholder="company.description" />
      <input :placeholder="company.logo.url" />
      <input :placeholder="company.logo.alt" />
      <input :placeholder="company.totalEmployees" />
      <input :placeholder="company.category" />
      <button>Update Company</button>
    </div>
    <div v-else>
      <p>Could not find the company. Please try again.</p>
      <button @click="refresh()">Try again</button>
    </div>
    <div v-if="error">
      <p>Could not find the company. Please try again.</p>
      <button @click="refresh()">Try again</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Company from 'lib/types/Company';

const route = useRoute();

const { slug } = route.params;

const {
  data: company,
  pending,
  error,
  refresh,
} = await useFetch<Company | null>(`/api/companies/${slug}`);

useHead({
  title: 'Edit Company',
  meta: [
    {
      name: 'description',
      content: 'To edit your company',
    },
  ],
});
</script>
