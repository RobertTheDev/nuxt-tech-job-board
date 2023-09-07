<template>
  <p>{{ user.emailAddress }}</p>
  <p>{{ user.firstName }}</p>
</template>

<script setup lang="ts">
import User from '@/models/user/types/User';

const user = defineProps<User>();
</script>
