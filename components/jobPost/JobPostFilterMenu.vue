<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="job-post-filter-menu">
    <p class="text-sm bold">Type of Employment</p>
    <div class="job-post-filter-menu-option-group">
      <div
        v-for="employmentTypeOption in employmentTypeOptions"
        :key="employmentTypeOption"
        class="job-post-filter-menu-option-container"
      >
        <input class="job-post-filter-menu-option-checkbox" type="checkbox" />
        <label class="text-xs bold" for="job1">{{
          employmentTypeOption
        }}</label>
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
import salaryOptions from '@/utils/inputOptions/salaryOptions';
import seniorLevelOptions from '@/utils/inputOptions/seniorLevelOptions';
import employmentTypeOptions from '@/utils/inputOptions/employmentTypeOptions';
</script>
