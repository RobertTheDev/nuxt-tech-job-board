<template>
  <div v-if="snackBar.active">
    <p>{{ snackBar.message }}</p>
  </div>
</template>

<script setup>
import snackBarStore from '@/store/useSnackBar';

const { snackBar } = snackBarStore();
</script>
