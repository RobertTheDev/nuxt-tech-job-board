<template>
  <CompanyDetail v-bind="company" />
</template>

<script setup lang="ts">
import Company from '../../../lib/types/Company';

const route = useRoute();

const { slug } = route.params;

const { data: company } = await useFetch<Company | null>(
  `/api/companies/${slug}`,
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
