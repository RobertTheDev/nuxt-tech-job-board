<template>
  <div class="header">
    <div class="logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 287.99">
        <path
          fill="#0473ff"
          d="M132.93 0L66.44 66.44H0V0zm44.31 0l-66.46 66.44v221.55h66.46V66.44H288V0z"
        />
      </svg>
      {{ companyName }}
    </div>
    <div class="header-menu">
      <NuxtLink
        v-for="headerLink in headerLinks"
        :key="headerLink.href"
        :class="route.fullPath === headerLink.href && 'active'"
        :to="headerLink.href"
        >{{ headerLink.name }}</NuxtLink
      >
    </div>
    <div class="user-settings">
      <img
        class="user-profile"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

// import useBurgerMenu from '../../store/useBurgerMenu';
import companyName from '@/utils/constants/companyName';
import headerLinks from '@/utils/links/headerLinks';

// const { openBurgerMenu } = useBurgerMenu();

// const { session } = await useSession();

const route = useRoute();

const profileMenuActive = ref(false);

const target = ref(null);

onClickOutside(target, () => (profileMenuActive.value = false));

// const router = useRouter();

// function navigate(href: string) {
//   router.push(href);
// }

// function toggleProfileMenu() {
//   profileMenuActive.value = !profileMenuActive.value;
// }
</script>
