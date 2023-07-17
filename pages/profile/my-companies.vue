<template>
  <div>
    <p>My Companies</p>
    <div v-for="company in companies">
      <img :src="company.logo.url" />
      <p>{{ company.name }}</p>
      <div>
        <button>Edit Company</button>
        <button>View Company</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: companies } = await useFetch('/api/companies');

useHead({
  title: 'TechBoard - My Companies',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
