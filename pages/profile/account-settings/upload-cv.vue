<template>
  <AccountSettingsMenu>
    <p>Upload CV</p>
    <p>You currently have no cv uploaded.</p>
    <button>Upload CV</button>
  </AccountSettingsMenu>
</template>

<script setup lang="ts">
useHead({
  title: 'Upload CV',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
