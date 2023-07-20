<template>
  <div class="primary-form-input-content-container">
    <p class="primary-form-input-label-text">Slug Url</p>
    <label for="slugUrl" class="primary-form-input-label-container">
      <input
        id="slugUrl"
        v-model="createJobForm.slug"
        name="slugUrl"
        type="text"
        placeholder="slugUrl"
        class="primary-form-input"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
import { useCreateJobPostStore } from '@/store/createJobPostStore';

const { createJobForm } = useCreateJobPostStore();
</script>
