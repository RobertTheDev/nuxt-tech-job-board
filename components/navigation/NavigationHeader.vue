<template>
  <header class="header-container">
    <div class="header-container-left">
      <button class="header-logo-container" @click="goHome()">
        <img
          class="header-logo-image"
          src="logo.svg"
          alt="TechBoard brand logo"
        />
        <p class="header-logo-text">{{ companyName }}</p>
      </button>
    </div>
    <div class="header-container-center">
      <nav class="header-link-group">
        <NuxtLink
          v-for="headerLink in headerLinks"
          :key="headerLink.href"
          :class="
            route.fullPath === headerLink.href
              ? 'header-link-active'
              : 'header-link'
          "
          :to="headerLink.href"
          >{{ headerLink.name }}</NuxtLink
        >
      </nav>
    </div>
    <div class="header-container-right">
      <div>
        <font-awesome-icon icon="fa-regular fa-bell" />
      </div>
      <div>
        <font-awesome-icon icon="fa-regular fa-bookmark" />
      </div>

      <div class="header-avatar-container">
        <input
          type="image"
          class="header-avatar-image"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
          alt="Profile menu control"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';
import headerLinks from '@/utils/links/headerLinks';

const route = useRoute();
const router = useRouter();

function goHome(): void {
  router.push('/');
}
</script>
