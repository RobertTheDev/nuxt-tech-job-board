<template>
  <header class="header-container">
    <NuxtLink to="/">{{ companyName }}</NuxtLink>
    <NuxtLink to="/job-posts/upload-job">Upload job</NuxtLink>
    <NuxtLink to="/profile/saved-jobs">Saved Jobs</NuxtLink>
    <NuxtLink to="/account-settings/upload-cv">Upload CV</NuxtLink>
    <button @click="toggleProfileMenu()">Profile</button>
    <button @click="navigate('/auth/sign-up')">Sign Up</button>
    <button @click="navigate('/auth/login')">Login</button>
    <div v-if="profileMenuActive" class="profile-menu-container">
      <NuxtLink to="/job-posts">Browse Jobs</NuxtLink>
      <NuxtLink to="/account-settings">Account Settings</NuxtLink>
      <NuxtLink to="/profile/my-companies">My Companies</NuxtLink>
      <NuxtLink to="/profile/followed-companies">Followed Companies</NuxtLink>
      <NuxtLink to="/profile/my-applications">My Applications</NuxtLink>
      <button>Log Out</button>
    </div>
  </header>
</template>

<script setup lang="ts">
import companyName from '../../lib/constants/companyName';

const profileMenuActive = ref(false);

const router = useRouter();

function navigate(href: string) {
  router.push(href);
}

function toggleProfileMenu() {
  profileMenuActive.value = !profileMenuActive.value;
}
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

.profile-menu-container {
  display: flex;
  gap: 10px;
}
</style>
