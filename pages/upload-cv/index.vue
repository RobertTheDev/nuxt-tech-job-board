<template>
  <SettingsMenu>
    <div>
      <h1>Upload CV</h1>
      <UploadCVForm />
    </div>
  </SettingsMenu>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

useHead({
  title: `Upload CV | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `Ready to kickstart your tech career? Upload your CV on ${companyName} and open the doors to exciting job opportunities. Our platform connects tech professionals with top companies. Join us today and showcase your skills to potential employers looking for talent like you.`,
    },
  ],
});
</script>
