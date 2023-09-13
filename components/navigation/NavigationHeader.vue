<template>
  <header class="header-container">
    <div class="header-container-left">
      <button class="header-logo-container" @click="navigateTo('/')">
        <svg
          class="header-logo-image"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 288 287.99"
        >
          <path
            fill="#0473ff"
            d="M132.93 0L66.44 66.44H0V0zm44.31 0l-66.46 66.44v221.55h66.46V66.44H288V0z"
          />
        </svg>
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
      <button
        class="header-icon-container"
        @click="navigateTo('/notifications')"
      >
        <font-awesome-icon class="header-icon-icon" icon="fa-regular fa-bell" />
      </button>
      <button
        class="header-icon-container"
        @click="navigateTo('/profile/saved-jobs')"
      >
        <font-awesome-icon
          class="header-icon-icon"
          icon="fa-regular fa-bookmark"
        />
      </button>

      <div class="header-avatar-container">
        <input
          type="image"
          class="header-avatar-image"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
          alt="Profile menu control"
          @click="toggleProfileMenu()"
        />
      </div>

      <HeaderProfileMenu
        v-if="profileMenuActive"
        v-on-click-outside="toggleProfileMenu"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { vOnClickOutside } from '@vueuse/components';
import companyName from '@/utils/constants/companyName';
import headerLinks from '@/utils/links/headerLinks';

const route = useRoute();
const router = useRouter();

const profileMenuActive = ref(false);

function toggleProfileMenu(): void {
  profileMenuActive.value = !profileMenuActive.value;
}

function navigateTo(path: string): void {
  router.push(path);
}
</script>
