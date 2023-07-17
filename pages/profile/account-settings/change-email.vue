<template>
  <AccountSettingsMenu>
    <p>Change Email Address</p>
    <p>Current Email Address: robertthedev@gmail.com</p>
    <p>Change Your Email Address</p>
    <input placeholder="Email Address" />
    <input placeholder="Password" />
    <button>Change Email Address</button>
  </AccountSettingsMenu>
</template>

<script setup lang="ts">
useHead({
  title: 'Change Email',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
