<template>
  <!-- Wrap Content With The Account Settings Menu Component. -->
  <AccountSettingsMenu>
    <!-- Close Account Form Component. -->
    <CloseAccountForm />
  </AccountSettingsMenu>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

// Seo Title And Content.
useHead({
  title: `Close Account | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `To close and delete your account on ${companyName} - and remove all associated data. Enter your password and then type 'DELETE'.`,
    },
  ],
});
</script>
