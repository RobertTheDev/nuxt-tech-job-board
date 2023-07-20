<template>
  <div class="primary-form-input-content-container">
    <p class="primary-form-input-label-text">Deadline Date</p>
    <label for="deadlineDate" class="primary-form-input-label-container">
      <input
        id="deadlineDate"
        v-model="createJobForm.deadlineDate"
        name="deadlineDate"
        type="datetime-local"
        placeholder="deadlineDate"
        class="primary-form-input"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
import { useCreateJobPostStore } from '@/store/createJobPostStore';

const { createJobForm } = useCreateJobPostStore();
</script>
