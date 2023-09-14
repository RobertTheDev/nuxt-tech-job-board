<template>
  <div>
    <h1>Create Job Details</h1>
    <div>
      <p>Job Type</p>
      <div>
        <button v-for="jobType of jobTypes" :key="jobType.value">
          {{ jobType.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import jobTypes from 'models/jobPost/types/jobTypes';
</script>
