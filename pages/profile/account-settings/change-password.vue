<template>
  <AccountSettingsMenu>
    <p>Change Password</p>
    <p>Set a new password.</p>
    <input placeholder="Current Password" />
    <input placeholder="New Password" />
    <input placeholder="Repeat Password" />
    <p>Your password must be at least 8 characters</p>
    <button>Save</button>
  </AccountSettingsMenu>
</template>

<script setup lang="ts">
useHead({
  title: 'Change Password',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
