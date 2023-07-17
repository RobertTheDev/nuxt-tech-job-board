<template>
  <p>Skills</p>
  <label for="skills">
    <input
      id="skills"
      v-model="createJobForm.skills"
      name="skills"
      type="text"
      placeholder="skills"
    />
  </label>
</template>

<script setup>
import useCreateJobPostStore from '@/store/createJobPostStore';

const { createJobForm } = useCreateJobPostStore();
</script>
