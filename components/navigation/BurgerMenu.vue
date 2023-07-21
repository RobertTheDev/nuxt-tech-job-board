<template>
  <div v-if="burgerMenu.active" class="burger-menu-wrapper">
    <div ref="target" class="burger-menu-container">
      <div class="burger-menu-header">
        <h2>Burger Menu</h2>
        <button @click="closeBurgerMenu">
          <font-awesome-icon icon="fa-solid fa-times" />
        </button>
      </div>
      <div class="burger-menu-links-container">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import burgerMenuStore from '@/store/useBurgerMenu';

const { burgerMenu, closeBurgerMenu } = burgerMenuStore();

const target = ref(null);

onClickOutside(target, closeBurgerMenu);
</script>
