<template>
  <div v-if="profile">
    <p>{{ profile._id }}</p>
    <p>{{ profile.createdAt }}</p>
    <p>{{ profile.emailAddress }}</p>
    <p>{{ profile.firstName }}</p>
    <p>{{ profile.lastName }}</p>
  </div>
  <div v-else>
    <p>No profile found.</p>
  </div>
</template>

<script setup lang="ts">
import User from '@/models/user/types/User';

const profile = defineProps<User | null>();
</script>
