<template>
  <AccountSettingsMenu>
    <p>edit profile</p>
  </AccountSettingsMenu>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'unauthenticated',
});

useHead({
  title: 'Edit Profile',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
