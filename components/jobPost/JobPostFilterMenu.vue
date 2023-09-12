<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="job-post-filter-menu">
    <p class="text-sm bold">Type of Employment</p>
    <div class="job-post-filter-menu-option-group">
      <div
        v-for="option in options"
        :key="option"
        class="job-post-filter-menu-option-container"
      >
        <input class="job-post-filter-menu-option-checkbox" type="checkbox" />
        <label class="text-xs bold" for="job1">{{ option }}</label>
      </div>
    </div>

    <p class="text-sm bold">Seniority Level</p>
    <div class="job-post-filter-menu-option-group">
      <div
        v-for="seniorLevelOption in seniorLevelOptions"
        :key="seniorLevelOption"
        class="job-post-filter-menu-option-container"
      >
        <input class="job-post-filter-menu-option-checkbox" type="checkbox" />
        <label class="text-xs bold" for="job7">Student Level</label>
      </div>
    </div>

    <p class="text-sm bold">Salary Range</p>
    <div class="job-post-filter-menu-option-group">
      <div
        v-for="salaryOption in salaryOptions"
        :key="salaryOption"
        class="job-post-filter-menu-option-container"
      >
        <input class="job-post-filter-menu-option-checkbox" type="checkbox" />
        <label class="text-xs bold" for="job1">{{ salaryOption }}</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const options = [
  'Full Time Jobs',
  'Part Time Jobs',
  'Remote Jobs',
  'Internship Jobs',
  'Contract',
  'Training Jobs',
];

const seniorLevelOptions = [
  'Student Level',
  'Entry Level',
  'Mid Level',
  'Senior Level',
  'Directors',
  'VP or Above',
];

const salaryOptions = [
  '$500 - $1000',
  '$1000 - $1500',
  '$1500 - $2000',
  '$2000 - $3000',
  '$3000 - $4000',
  '$4000 - $5000',
];
</script>
