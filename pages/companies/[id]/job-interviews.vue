<template>
  <div>
    <h1>Company Interviews</h1>

    <div v-if="companyJobInterviews">
      <JobInterviewCard
        v-for="companyJobInterview of companyJobInterviews"
        :key="companyJobInterview._id"
        v-bind="companyJobInterview"
      />
    </div>

    <div v-if="pending">
      <p>Company interviews loading...</p>
    </div>

    <div v-if="error">
      <p>
        There was an error trying to display company interviews. Please try
        again.
      </p>
      <button @click="refresh()">Try again.</button>
    </div>

    <div v-else>
      <p>No new company interviews.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';
import JobInterview from '@/models/jobInterview/types/JobInterview';

const route = useRoute();

const { id } = route.params;

const {
  data: companyJobInterviews,
  pending,
  error,
  refresh,
} = await useFetch<JobInterview[]>(`/api/job-interviews/company/${id}`);

useHead({
  title: `Company Interviews | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
