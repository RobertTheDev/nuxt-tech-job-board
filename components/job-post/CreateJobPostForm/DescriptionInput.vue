<template>
  <div class="primary-form-input-content-container">
    <p class="primary-form-input-label-text">Description</p>
    <label for="description" class="primary-form-input-label-container">
      <textarea
        id="description"
        v-model="createJobForm.description"
        name="description"
        type="text"
        class="primary-form-input"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
import { useCreateJobPostStore } from '@/store/createJobPostStore';

const { createJobForm } = useCreateJobPostStore();
</script>
store/useCreateJobPostStore
