<template>
  <div>
    <input :placeholder="company.name" />
    <input :placeholder="company.description" />
    <input :placeholder="company.logo.url" />
    <input :placeholder="company.logo.alt" />
    <input :placeholder="company.totalEmployees" />
    <input :placeholder="company.category" />
    <button>Update Company</button>
  </div>
</template>

<script setup lang="ts">
const company = defineProps([
  'logo',
  'name',
  'description',
  'category',
  'totalEmployees',
]);
</script>
