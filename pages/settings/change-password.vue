<template>
  <SettingsMenu>
    <div>
      <h1>Change Password</h1>
      <p>
        Enter your new and current passwords to change password. Your new
        password must not be the same as your existing one and must meet the
        TechBoard password criteria.
      </p>

      <UpdatePasswordForm />
    </div>
  </SettingsMenu>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

useHead({
  title: `Change Password | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `o change your password for your account on ${companyName} - enter your new password followed by your current password.`,
    },
  ],
});
</script>
