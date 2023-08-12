<template>
  <div>
    <p>{{ user._id }}</p>
    <p>{{ user.createdAt }}</p>
    <p>{{ user.emailAddress }}</p>
    <p>{{ user.firstName }}</p>
    <p>{{ user.lastName }}</p>
  </div>
</template>

<script setup lang="ts">
const user = defineProps([
  '_id',
  'createdAt',
  'emailAddress',
  'firstName',
  'lastName',
]);
</script>
