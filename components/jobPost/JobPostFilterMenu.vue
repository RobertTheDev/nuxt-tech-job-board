<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="search-type">
    <div class="job-time">
      <div class="job-time-title">Type of Employment</div>
      <div class="job-wrapper">
        <div v-for="option in options" :key="option" class="type-container">
          <input type="checkbox" class="job-style" />
          <label for="job1">{{ option }}</label>
        </div>
      </div>
    </div>
    <div class="job-time">
      <div class="job-time-title">Seniority Level</div>
      <div class="job-wrapper">
        <div
          v-for="seniorLevelOption in seniorLevelOptions"
          :key="seniorLevelOption"
          class="type-container"
        >
          <input type="checkbox" class="job-style" />
          <label for="job7">Student Level</label>
        </div>
      </div>
    </div>
    <div class="job-time">
      <div class="job-time-title">Salary Range</div>
      <div class="job-wrapper">
        <div
          v-for="salaryOption in salaryOptions"
          :key="salaryOption"
          class="type-container"
        >
          <input type="checkbox" class="job-style" />
          <label for="job1">{{ salaryOption }}</label>
        </div>
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
