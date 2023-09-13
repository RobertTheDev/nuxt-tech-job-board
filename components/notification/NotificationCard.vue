<template>
  <div>
    <p>{{ notification.id }}</p>
  </div>
</template>

<script setup lang="ts">
import Notification from '@/models/notification/types/Notification';

const notification = defineProps<Notification>();
</script>
