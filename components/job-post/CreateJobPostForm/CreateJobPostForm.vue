<template>
  <div class="page">
    <form class="primary-form-container" @submit.prevent="uploadJob()">
      <div class="primary-form-header-container">
        <h1>Upload Job</h1>
      </div>
      <!-- TITLE -->
      <TitleInput />

      <!-- COMPANY -->
      <CompanyInput />

      <!-- DESCRIPTION -->
      <DescriptionInput />

      <!-- REQUIREMENTS -->
      <RequirementsInput />

      <!-- SLUG URL -->
      <SlugUrlInput />

      <!-- SKILLS -->
      <SkillsInput />

      <!-- CONTRACT TYPE -->
      <ContractTypeInput />

      <!-- LOCATION TYPE -->
      <LocationTypeInput />

      <!-- LOCATION -->
      <LocationInput />

      <!-- SALARY -->
      <SalaryInput />

      <!-- DEADLINE DATE -->
      <DeadlineDateInput />

      <div class="primary-form-footer-container">
        <!-- SIGN UP BUTTON -->
        <button class="primary-form-button" type="submit">Upload</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useCreateJobPostStore } from '@/store/useCreateJobPostStore';

const { uploadJob } = useCreateJobPostStore();
</script>

<style>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 4rem;
}
</style>
store/useCreateJobPostStore
