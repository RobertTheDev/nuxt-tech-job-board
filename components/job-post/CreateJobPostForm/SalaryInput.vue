<template>
  <p>Salary</p>
  <label for="minimumSalary">
    <input
      id="minimumSalary"
      v-model="createJobForm.salary.min"
      name="minimumSalary"
      type="number"
      placeholder="Minimum Salary"
    />
  </label>
  <label for="maximumSalary">
    <input
      id="maximumSalary"
      v-model="createJobForm.salary.max"
      name="maximumSalary"
      type="number"
      placeholder="Maximum Salary"
    />
  </label>
</template>

<script setup>
import useCreateJobPostStore from '@/store/createJobPostStore';

const { createJobForm } = useCreateJobPostStore();
</script>
