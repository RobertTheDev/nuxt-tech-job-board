<template>
  <p>Company</p>
  <p>This is {{ createJobForm.companyId }}</p>
  <label for="companyId">
    <select v-model="createJobForm.companyId">
      <option value="6666">Company a</option>
    </select>
  </label>
  <p>No companies</p>
  <button>Create Company</button>
</template>

<script setup lang="ts">
import { useCreateJobPostStore } from '../../../store/useCreateJobPostStore';

const { createJobForm } = useCreateJobPostStore();
</script>
