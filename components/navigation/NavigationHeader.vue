<template>
  <header class="header-container">
    <NuxtLink to="/">{{ companyName }}</NuxtLink>
    <NuxtLink to="/job-posts/upload-job">Upload job</NuxtLink>
    <NuxtLink to="/profile/saved-jobs">Saved Jobs</NuxtLink>
    <NuxtLink to="/account-settings/upload-cv">Upload CV</NuxtLink>
    <NuxtLink to="/profile">Profile</NuxtLink>
  </header>
</template>

<script setup>
import companyName from '../../lib/constants/companyName';
</script>

<style>
.header-container {
  display: flex;
  height: 60px;
  left: 0px;
  position: sticky;
  top: 0px;
  width: 100%;
  background: palegreen;
  gap: 20px;
}
</style>
