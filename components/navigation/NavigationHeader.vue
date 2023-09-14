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

    <div class="header-container-right">
      <div v-if="session?.user">
        <button
          class="header-icon-container"
          @click="navigateTo('/notifications')"
        >
          <font-awesome-icon
            class="header-icon-icon"
            icon="fa-regular fa-bell"
          />
        </button>
        <button class="header-icon-container" @click="toggleProfileMenu()">
          <font-awesome-icon
            class="header-icon-icon"
            icon="fa-regular fa-user"
          />
        </button>

        <button class="header-action-button" @click="navigateTo('/upload-job')">
          <p class="header-action-button-text">Post a Job</p>
        </button>
      </div>
      <div v-else>
        <button class="header-action-button" @click="navigateTo('/auth/login')">
          <p class="header-action-button-text">Sign in</p>
        </button>
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

const router = useRouter();

const profileMenuActive = ref(false);

const { session } = await useSession();

function toggleProfileMenu(): void {
  profileMenuActive.value = !profileMenuActive.value;
}

function navigateTo(path: string): void {
  router.push(path);
}
</script>
