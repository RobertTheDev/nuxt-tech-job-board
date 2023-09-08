<template>
  <header class="header-container">
    <div class="header-logo-container">
      <NuxtLink to="/" class="header-logo-text"> {{ companyName }} </NuxtLink>
    </div>
    <div class="header-links-container">
      <NuxtLink
        v-for="headerLink in headerLinks"
        :key="headerLink.href"
        class="header-link"
        :class="route.fullPath === headerLink.href && 'active-link'"
        :to="headerLink.href"
        >{{ headerLink.name }}</NuxtLink
      >
    </div>
    <div class="header-profile-container">
      <button class="header-control header-burger-icon" @click="openBurgerMenu">
        <font-awesome-icon
          class="header-control-icon"
          icon="fa-solid fa-bars"
        />
      </button>
      <div v-if="session?.user" class="header-profile-container">
        <button class="header-control" @click="navigate('/profile/saved-jobs')">
          <font-awesome-icon
            class="header-control-icon"
            icon="fa-regular fa-heart"
          />
        </button>
        <button class="header-control" @click="toggleProfileMenu()">
          <font-awesome-icon
            class="header-control-icon"
            icon="fa-regular fa-user"
          />
        </button>

        <ProfileMenu v-if="profileMenuActive" ref="target" />
      </div>

      <div v-else>
        <button @click="navigate('/auth/login')">Login or Register</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

import useBurgerMenu from '../../store/useBurgerMenu';
import companyName from '@/utils/constants/companyName';
import headerLinks from '@/utils/links/headerLinks';

const { openBurgerMenu } = useBurgerMenu();

const { session } = await useSession();

const route = useRoute();

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
