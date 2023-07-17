<template>
  <p>Location Type</p>
  <select v-model="createJobForm.locationType">
    <option>Remote</option>
    <option>Hybrid</option>
    <option>In-house</option>
  </select>
</template>

<script setup>
import useCreateJobPostStore from '@/store/createJobPostStore';

const { createJobForm } = useCreateJobPostStore();
</script>
