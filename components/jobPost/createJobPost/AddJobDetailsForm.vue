<template>
  <div>
    <p>Job Type</p>
    <div>
      <button v-for="jobType of jobTypes" :key="jobType.value">
        {{ jobType.name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import jobTypes from '@/models/jobPost/types/jobTypes';
</script>
