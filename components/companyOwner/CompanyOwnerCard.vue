<template>
  <p>{{ companyOwner.user.emailAddress }}</p>
  <p>{{ companyOwner.company.name }}</p>
</template>

<script setup lang="ts">
import CompanyOwner from '@/models/companyOwner/types/CompanyOwner';

const companyOwner = defineProps<CompanyOwner>();
</script>
