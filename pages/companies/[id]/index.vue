<template>
  <CompanyDetail v-bind="company" />
</template>

<script setup lang="ts">
import Company from '@/models/company/types/Company';

const route = useRoute();

const { id } = route.params;

const { data: company } = await useFetch<Company | null>(
  `/api/companies/${id}`,
);

useHead({
  title: company.value ? company.value.name : 'Company',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
