<template>
  <p>Location</p>
  <label for="location">
    <input
      id="location"
      v-model="createJobForm.location"
      name="location"
      type="text"
      placeholder="location"
    />
  </label>
</template>

<script setup>
import useCreateJobPostStore from '@/store/createJobPostStore';

const { createJobForm } = useCreateJobPostStore();
</script>
