<template>
  <div class="layout-container">
    <NavigationHeader />
    <NavigationBurgerMenu />
    <main class="main-container">
      <NavigationGlobalModal />
      <button @click="openSnackBar('sucess', 'You did it!!!')">
        Open snackbar
      </button>
      <slot />
      <NavigationSnackBar />
    </main>
    <NavigationFooter />
  </div>
</template>

<script setup lang="ts">
import snackBarStore from '@/store/useSnackBar';

const { openSnackBar } = snackBarStore();
</script>

<style>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.main-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
}
</style>
