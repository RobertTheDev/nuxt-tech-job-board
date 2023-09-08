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

<style lang="scss">
.logo {
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    width: 26px;
    margin-right: 10px;
  }
}
.user-settings {
  display: flex;
  align-items: center;
  font-weight: 500;
  svg {
    width: 20px;
    color: #94949f;
  }
}
.header {
  display: flex;
  align-items: center;
  box-shadow: 0 1px 4px rgb(0 0 0 / 30%);
  transition: box-shadow 0.3s;
  flex-shrink: 0;
  padding: 0 40px;
  white-space: nowrap;
  background-color: var(--header-bg-color);
  height: 60px;
  width: 100%;
  font-size: 14px;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 22;
  &-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    flex: 1;
  }
  &-menu a {
    text-decoration: none;
    color: var(--body-color);
    font-weight: 500;
    font-size: 14px;

    &:hover {
      color: var(--active-color);
    }

    &.active {
      color: var(--active-color);
    }
  }
}

.user-profile {
  width: 44px;
  height: 44px;
  border-radius: 100%;
  object-fit: cover;
}
</style>
