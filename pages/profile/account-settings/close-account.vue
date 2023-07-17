<template>
  <AccountSettingsMenu>
    <p>Close Account</p>
    <p>
      Please enter "CLOSE" and your password to confirm that you wish to close
      your account
    </p>
    <div>
      <p>Type "CLOSE":</p>
      <input />
    </div>
    <div>
      <p>Enter your password:</p>
      <input />
    </div>
    <button>Close Account</button>
  </AccountSettingsMenu>
</template>

<script setup lang="ts">
useHead({
  title: 'Close Account',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
