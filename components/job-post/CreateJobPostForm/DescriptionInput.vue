<template>
  <p>Description</p>
  <label for="description">
    <input
      id="description"
      v-model="createJobForm.description"
      name="description"
      type="text"
      placeholder="description"
    />
  </label>
</template>

<script setup>
import useCreateJobPostStore from '@/store/createJobPostStore';

const { createJobForm } = useCreateJobPostStore();
</script>
