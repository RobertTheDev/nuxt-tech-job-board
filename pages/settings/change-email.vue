<template>
  <SettingsMenu>
    <div>
      <h1>Change Email</h1>
      <UpdateEmailForm />
    </div>
  </SettingsMenu>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

useHead({
  title: `Change Email | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `Change your email on ${companyName} by entering a new email address in the input below and authenticate with your password.`,
    },
  ],
});
</script>
