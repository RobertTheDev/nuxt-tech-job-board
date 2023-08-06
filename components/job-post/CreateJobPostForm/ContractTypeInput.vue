<template>
  <div class="primary-form-input-content-container">
    <p class="primary-form-input-label-text">Contract Type</p>
    <label for="contractType" class="primary-form-input-label-container">
      <select v-model="createJobForm.contractType" class="primary-form-input">
        <option>Full-time</option>
        <option>Part-Time</option>
        <option>Contract</option>
      </select>
    </label>
  </div>
</template>

<script setup lang="ts">
import { useCreateJobPostStore } from '../../../store/useCreateJobPostStore';

const { createJobForm } = useCreateJobPostStore();
</script>
