<template>
  <p>Contract Type</p>
  <label for="contractType">
    <select v-model="createJobForm.contractType">
      <option>Full-time</option>
      <option>Part-Time</option>
      <option>Contract</option>
    </select>
  </label>
</template>

<script setup lang="ts">
import { useCreateJobPostStore } from '@/store/createJobPostStore';

const { createJobForm } = useCreateJobPostStore();
</script>
