<template>
  <div>
    <h1>Company Applications</h1>

    <div v-if="companyApplications">
      <JobApplicationCard
        v-for="companyApplication of companyApplications"
        :key="companyApplication._id"
        v-bind="companyApplication"
      />
    </div>

    <div v-if="pending">
      <p>Notifications loading...</p>
    </div>

    <div v-if="error">
      <p>
        There was an error trying to display applications. Please try again.
      </p>
      <button @click="refresh()">Try again.</button>
    </div>

    <div v-else>
      <p>No new applications.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';
import JobApplication from '@/models/jobApplication/types/JobApplication';

const route = useRoute();

const { id } = route.params;

const {
  data: companyApplications,
  pending,
  error,
  refresh,
} = await useFetch<JobApplication[]>(`/api/job-applications/company/${id}`);

useHead({
  title: `Company Applications | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
