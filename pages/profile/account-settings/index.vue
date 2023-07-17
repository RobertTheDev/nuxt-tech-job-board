<template>
  <AccountSettingsMenu>
    <p>Account Settings</p>
    <p>Contact Information</p>
    <p>Prefix</p>
    <select>
      <option>Mr.</option>
      <option>Mrs.</option>
      <option>Ms.</option>
      <option>Miss.</option>
      <option>Mx.</option>
      <option>Dr.</option>
      <option>Prof.</option>
      <option>Rev.</option>
    </select>
    <input placeholder="First Name" />
    <input placeholder="Surname" />
    <input placeholder="Home Phone" />
    <input placeholder="Mobile Phone" />
    <input placeholder="Job Title" />
    <input placeholder="Company / Organisation" />
    <input placeholder="Website" />
  </AccountSettingsMenu>
</template>

<script setup lang="ts">
useHead({
  title: 'Account Settings',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
