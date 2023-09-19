<template>
  <div>
    <p>Profile</p>
    <p>{{ JSON.stringify(session) }}</p>
    <div v-if="session?.user">
      <p>{{ session.user.emailAddress }}</p>
    </div>
    <div v-else>
      <p>No user</p>
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
