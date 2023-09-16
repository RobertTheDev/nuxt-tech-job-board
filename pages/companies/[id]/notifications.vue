<template>
  <div>
    <h1>Company Notifications</h1>

    <div v-if="companyNotifications">
      <NotificationCard
        v-for="companyNotification of companyNotifications"
        :key="companyNotification.id"
        v-bind="companyNotification"
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
      <p>No new notifications.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';
import Notification from '@/models/notification/types/Notification';

const route = useRoute();

const { id } = route.params;

const {
  data: companyNotifications,
  pending,
  error,
  refresh,
} = await useFetch<Notification[]>(`/api/notifications/company/${id}`);

// definePageMeta({
//   middleware: ['unauthenticated'],
// });

useHead({
  title: `Company Notifications | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
