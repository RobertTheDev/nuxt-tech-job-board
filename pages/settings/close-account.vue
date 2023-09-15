<template>
  <SettingsMenu>
    <div>
      <h1>Close Account</h1>
      <p>
        Please enter "CLOSE" and your password to confirm that you wish to close
        your account.
      </p>
      <CloseAccountForm />
    </div>
  </SettingsMenu>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

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
