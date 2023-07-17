<template>
  <p>Upload Job</p>
  <form @submit.prevent="uploadJob()">
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

    <button>Upload</button>
  </form>
</template>

<script setup>
import useCreateJobPostStore from '@/store/createJobPostStore';
import TitleInput from './TitleInput.vue';

const { uploadJob } = useCreateJobPostStore();
</script>
