<template>
  <p>{{ profile.emailAddress }}</p>
  <p>{{ profile.firstName }}</p>
</template>

<script setup lang="ts">
import User from '@/models/user/types/User';

const profile = defineProps<User>();
</script>
