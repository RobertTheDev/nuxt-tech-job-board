<template>
  <div class="primary-form-input-content-container">
    <p class="primary-form-input-label-text">Title</p>
    <label for="title" class="primary-form-input-label-container">
      <input
        id="title"
        v-model="createJobForm.title"
        name="title"
        type="text"
        placeholder="Title"
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
