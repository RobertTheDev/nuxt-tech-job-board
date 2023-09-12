<template>
  <div>
    <NuxtLink to="/">{{ companyName }}</NuxtLink>
    <NuxtLink to="/job-posts">Job Posts</NuxtLink>
    <NuxtLink to="/companies">Companies</NuxtLink>
    <NuxtLink to="/companies">Employees</NuxtLink>
    <NuxtLink to="/saved-jobs">Saved Jobs</NuxtLink>
  </div>
</template>

<script setup>
import companyName from '@/utils/constants/companyName';
</script>
