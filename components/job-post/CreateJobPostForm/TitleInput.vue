<template>
  <p>Title</p>
  <label for="title">
    <input
      id="title"
      v-model="createJobForm.title"
      name="title"
      type="text"
      placeholder="title"
    />
  </label>
</template>

<script setup>
import useCreateJobPostStore from '@/store/createJobPostStore';

const { createJobForm } = useCreateJobPostStore();
</script>
