<template>
  <header class="header-container">
    <div class="header-logo-container">
      <NuxtLink to="/" class="header-logo-text"> {{ companyName }} </NuxtLink>
    </div>
    <div class="header-links-container">
      <NuxtLink class="header-link" to="/">Browse Jobs</NuxtLink>
      <NuxtLink class="header-link" to="/job-posts/upload-job"
        >Upload job</NuxtLink
      >
      <NuxtLink class="header-link" to="/profile/saved-jobs"
        >Saved Jobs</NuxtLink
      >
      <NuxtLink class="header-link" to="/profile/account-settings/upload-cv"
        >Upload CV</NuxtLink
      >
    </div>
    <div class="header-profile-container">
      <button class="header-control" @click="openBurgerMenu">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </button>
      <button class="header-control" @click="navigate('/profile/saved-jobs')">
        <font-awesome-icon
          class="header-control-icon"
          icon="fa-regular fa-heart"
        />
      </button>
      <button
        v-if="authenticatedUser"
        class="header-control"
        @click="toggleProfileMenu()"
      >
        <font-awesome-icon
          class="header-control-icon"
          icon="fa-regular fa-user"
        />
      </button>
      <button
        v-if="!authenticatedUser"
        class="header-control"
        @click="navigate('/auth/login')"
      >
        <font-awesome-icon
          class="header-control-icon"
          icon="fa-regular fa-user"
        />
      </button>

      <ProfileMenu v-if="profileMenuActive" ref="target" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import companyName from '../../lib/constants/companyName';

import authenticatedUserStore from '@/store/useAuthenticatedUserStore';

import useBurgerMenu from '@/store/useBurgerMenu';

const { openBurgerMenu } = useBurgerMenu();

const { authenticatedUser } = authenticatedUserStore();

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
store/useAuthenticatedUserStore
