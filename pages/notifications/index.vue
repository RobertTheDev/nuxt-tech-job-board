<template>
  <div>
    <h1>Notifications</h1>

    <div v-if="notifications">
      <NotificationCard
        v-for="notification in notifications"
        :key="notification.id"
        v-bind="notification"
      />
    </div>

    <div v-if="pending">
      <p>Notifications loading...</p>
    </div>

    <div v-if="error">
      <p>
        There was an error trying to display notifications. Please try again.
      </p>
      <button @click="refresh()">Try again.</button>
    </div>

    <div v-else>
      <p>You have no new notifications</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';
import Notification from '@/models/notification/types/Notification';

const {
  data: notifications,
  pending,
  error,
  refresh,
} = await useFetch<Notification[]>('/api/notifications');

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
