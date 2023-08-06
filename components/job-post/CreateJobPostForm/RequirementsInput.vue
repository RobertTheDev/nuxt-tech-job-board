<template>
  <p>Requirements</p>
  <label for="requirements">
    <input
      id="requirements"
      v-model="createJobForm.requirements"
      name="requirements"
      type="text"
      placeholder="requirements"
    />
  </label>
</template>

<script setup lang="ts">
import { useCreateJobPostStore } from '../../../store/useCreateJobPostStore';

const { createJobForm } = useCreateJobPostStore();
</script>
