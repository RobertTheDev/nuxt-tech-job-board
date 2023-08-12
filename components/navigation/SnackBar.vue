<template>
  <div v-if="snackBar.active" class="container">
    <p>{{ snackBar.message }}</p>
  </div>
</template>

<script setup>
import snackBarStore from '@/store/useSnackBar';

const { snackBar } = snackBarStore();
</script>

<style lang="scss" scoped>
.container {
  height: 12rem;
  width: 20rem;
  position: fixed;
  left: calc(50% - 10rem);
  bottom: 5rem;
  background: red;
}
</style>
