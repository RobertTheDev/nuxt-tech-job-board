<template>
  <p>Deadline Date</p>
  <label for="deadlineDate">
    <input
      id="deadlineDate"
      v-model="createJobForm.deadlineDate"
      name="deadlineDate"
      type="datetime-local"
      placeholder="deadlineDate"
    />
  </label>
</template>

<script setup lang="ts">
import { useCreateJobPostStore } from '@/store/createJobPostStore';

const { createJobForm } = useCreateJobPostStore();
</script>
