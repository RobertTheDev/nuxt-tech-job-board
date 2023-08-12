<template>
  <div>
    <p>Profile</p>

    <div v-if="!session"><p>No Session</p></div>
    <div v-if="session">
      <div v-if="!session.user">
        <p>No Session User</p>
      </div>
      <ProfileDetail v-if="session.user" v-bind="session.user" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { session } = await useSession();

useHead({
  title: 'Profile',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
