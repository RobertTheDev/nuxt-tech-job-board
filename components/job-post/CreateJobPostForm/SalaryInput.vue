<template>
  <div class="primary-form-input-content-container">
    <p class="primary-form-input-label-text">Salary</p>
    <label for="minimumSalary" class="primary-form-input-label-container">
      <input
        id="minimumSalary"
        v-model="createJobForm.salary.min"
        name="minimumSalary"
        type="number"
        placeholder="Minimum Salary"
        class="primary-form-input"
      />
    </label>
    <label for="maximumSalary" class="primary-form-input-label-container">
      <input
        id="maximumSalary"
        v-model="createJobForm.salary.max"
        name="maximumSalary"
        type="number"
        placeholder="Maximum Salary"
        class="primary-form-input"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
import { useCreateJobPostStore } from '@/store/createJobPostStore';

const { createJobForm } = useCreateJobPostStore();
</script>
