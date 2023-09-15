<template>
  <div>
    <h1>Add Salary</h1>
    <AddSalaryForm />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['unauthenticated'],
});

useHead({
  title: 'Upload Job - Add Salary',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
