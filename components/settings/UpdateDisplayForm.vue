<template>
  <form @submit.prevent="handleForm()">
    <input />
    <button type="submit">Update</button>
  </form>
</template>

<script setup lang="ts">
function handleForm(): void {
  alert('Hello');
}
</script>
