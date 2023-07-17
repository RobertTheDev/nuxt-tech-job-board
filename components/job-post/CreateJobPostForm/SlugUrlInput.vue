<template>
  <p>Slug Url</p>
  <label for="slugUrl">
    <input
      id="slugUrl"
      v-model="createJobForm.slug"
      name="slugUrl"
      type="text"
      placeholder="slugUrl"
    />
  </label>
</template>

<script setup>
import useCreateJobPostStore from '@/store/createJobPostStore';

const { createJobForm } = useCreateJobPostStore();
</script>
