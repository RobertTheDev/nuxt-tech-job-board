<template>
  <div>
    <p>Profile</p>
    <div v-if="pending">
      <p>Loading...</p>
    </div>
    <div v-if="error">
      <button @click="refresh()">Retry</button>
    </div>
    <div v-if="user">
      <ProfileDetails v-bind="user" />
    </div>
    <div v-else>
      <p>No user</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';
import User from '@/models/user/types/User';

const {
  data: user,
  pending,
  error,
  refresh,
} = await useFetch<User | null>('/api/profile');

useHead({
  title: `${
    user.value ? user.value.firstName + ' ' + user.value.lastName : 'Profile'
  } | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `Welcome to ${companyName} - an online platform for finding tech jobs. Explore a diverse range of remote job opportunities in the tech industry on our cutting-edge platform. ${companyName} is dedicated to connecting talented professionals like you with remote positions in programming, software development, web design, and beyond. Discover the perfect work-from-home job that matches your skills and aspirations. Join our thriving community of remote tech enthusiasts and unlock endless possibilities for growth and success. Embrace the future of work and kickstart your rewarding tech career with ${companyName} today.`,
    },
  ],
});
</script>
