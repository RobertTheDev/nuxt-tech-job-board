<template>
  <header class="header-container">
    <div class="header-logo-container">
      <NuxtLink to="/"
        ><p class="header-logo-text">{{ companyName }}</p></NuxtLink
      >
    </div>
    <div class="header-content-container">
      <NuxtLink to="/job-posts/upload-job">Upload job</NuxtLink>
      <NuxtLink to="/profile/saved-jobs">Saved Jobs</NuxtLink>
      <NuxtLink to="/account-settings/upload-cv">Upload CV</NuxtLink>
      <button @click="toggleProfileMenu()">Profile</button>
      <button @click="navigate('/auth/sign-up')">Sign Up</button>
      <button @click="navigate('/auth/login')">Login</button>

      <ProfileMenu v-if="profileMenuActive" ref="target" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import companyName from '../../lib/constants/companyName';

const profileMenuActive = ref(false);

const target = ref(null);

onClickOutside(target, () => (profileMenuActive.value = false));

const router = useRouter();

function navigate(href: string) {
  router.push(href);
}

function toggleProfileMenu() {
  profileMenuActive.value = !profileMenuActive.value;
}
</script>
