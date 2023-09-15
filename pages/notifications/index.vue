<template>
  <div>
    <h1 class="text-3xl">Notifications</h1>
    <!-- <div>
      <NotificationCard
        v-for="notification in notifications"
        :key="notification.id"
        v-bind="notification"
      />
    </div> -->
  </div>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

definePageMeta({
  middleware: ['unauthenticated'],
});

useHead({
  title: `Notifications | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `Your notifications on ${companyName} will appear here. Notifications will keep you up to date on job offers and application updates.`,
    },
  ],
});
</script>
