<template>
  <div v-if="mounted">
    <NavigationHeader />
    <NavigationBurgerMenu />
    <main>
      <NavigationGlobalModal />

      <slot />
      <NavigationSnackBar />
    </main>
    <NavigationFooter />
  </div>
</template>

<script setup lang="ts">
const mounted = ref(false);

onBeforeMount(() => {
  mounted.value = true;
});
</script>
