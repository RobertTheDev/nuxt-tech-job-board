<template>
  <p>Location Type</p>
  <label for="contractType">
    <select v-model="createJobForm.locationType">
      <option>Remote</option>
      <option>Hybrid</option>
      <option>In-house</option>
    </select>
  </label>
</template>

<script setup lang="ts">
import { useCreateJobPostStore } from '../../../store/useCreateJobPostStore';

const { createJobForm } = useCreateJobPostStore();
</script>
