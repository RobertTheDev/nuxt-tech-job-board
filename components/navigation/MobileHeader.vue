<template>
  <header class="mobile-header-container header-mobile">
    <div class="mobile-header-container-left">
      <button class="mobile-header-burger-menu-button-container">
        <font-awesome-icon
          class="mobile-header-burger-menu-button-icon"
          icon="fa-solid fa-bars"
        />
      </button>
    </div>
    <div class="mobile-header-container-center">
      <div class="mobile-header-logo-container">
        <img
          class="mobile-header-logo-image"
          src="logo.svg"
          alt="TechBoard brand logo"
        />
        <p class="mobile-header-logo-text">{{ companyName }}</p>
      </div>
    </div>
    <div class="mobile-header-container-right">
      <div class="mobile-header-avatar-container">
        <input
          type="image"
          class="mobile-header-avatar-image"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
          alt="Profile menu control"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';
</script>
