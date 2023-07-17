<template>
  <div v-if="!jobPost"><p>No Job</p></div>
  <div v-if="jobPost">
    <p>{{ jobPost.title }}</p>
    <p>
      Posted
      {{ differenceInDays(new Date(), new Date(jobPost.createdAt)) }} days ago.
    </p>
    <p>Closes {{ format(new Date(jobPost.deadlineDate), 'd MMM yyyy') }}</p>
    <p>{{ jobPost.title }}</p>
    <p>{{ jobPost.locationType }}</p>
    <p>{{ jobPost.contractType }}</p>
    <p>
      £{{ jobPost.salary.min.toLocaleString() }} -
      {{ jobPost.salary.max.toLocaleString() }}
    </p>
    <p>{{ jobPost.description }}</p>
    <img :src="jobPost.company.logo.url" :alt="jobPost.company.logo.alt" />
    <p>{{ jobPost.company.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { differenceInDays, format } from 'date-fns';
import JobPost from 'lib/types/JobPost';
const route = useRoute();

const id = ref(route.query.id).value as string;

const jobPost = ref<JobPost | null>(null);

async function getJobPostById(id: string) {
  const { data } = await useFetch(`/api/jobPosts/${id}`);
  jobPost.value = data.value;
}

getJobPostById(id);
</script>
