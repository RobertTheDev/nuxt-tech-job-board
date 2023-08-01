<template>
  <div>
    <p>Profile</p>

    <div v-if="!session"><p>No Session</p></div>
    <div v-if="session">
      <div v-if="!session.user">
        <p>No Session User</p>
      </div>

      <p>{{ session?.user?._id }}</p>
      <p>{{ session?.user?.emailAddress }}</p>
      <p>{{ session?.user?.firstName }}</p>
      <p>{{ session?.user?.lastName }}</p>
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
