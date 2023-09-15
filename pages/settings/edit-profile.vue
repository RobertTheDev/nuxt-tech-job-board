<template>
  <SettingsMenu>
    <div>
      <h1>Edit Profile</h1>
      <UpdateAccountForm />
    </div>
  </SettingsMenu>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

useHead({
  title: `Edit Profile | ${companyName}`,
  meta: [
    {
      name: 'description',
      content:
        'Use this page to edit your account profile. Use the form below and click save to see the changes made to your profile.',
    },
  ],
});
</script>
