<template>
  <SettingsMenu>
    <div>
      <h1>Change Display</h1>
      <UpdateDisplayForm />
    </div>
  </SettingsMenu>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

useHead({
  title: `Change Display | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `Use this page to edit your display settings on ${companyName} - here you can adjust your font sizes and change the theme colour.`,
    },
  ],
});
</script>
