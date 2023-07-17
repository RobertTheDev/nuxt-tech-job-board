<template>
  <p>Contract Type</p>
  <select v-model="createJobForm.contractType">
    <option>Full-time</option>
    <option>Part-Time</option>
    <option>Contract</option>
  </select>
</template>

<script setup>
import useCreateJobPostStore from '@/store/createJobPostStore';

const { createJobForm } = useCreateJobPostStore();
</script>
