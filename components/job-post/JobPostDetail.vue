<!-- <template>
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
</script> -->

<template>
  <div class="container">
    <div class="job-post-detail-company-cover-image-container">
      <img
        class="job-post-detail-company-cover-image"
        :src="jobPost.company.coverImage.url"
        :alt="jobPost.company.coverImage.alt"
      />
    </div>
    <button><font-awesome-icon icon="fa-regular fa-bookmark" /></button>
    <p>{{ jobPost.title }}</p>
    <p>
      Posted
      {{ differenceInDays(new Date(), new Date(jobPost.createdAt)) }} days ago.
    </p>
    <p>{{ jobPost.totalApplicants }} applicants</p>
    <p>
      £{{ jobPost.salary.min.toLocaleString() }} -
      {{ jobPost.salary.max.toLocaleString() }}
    </p>
    <p>{{ jobPost.contractType }}</p>
    <p>
      Closes at
      {{ format(new Date(jobPost.deadlineDate), 'hh:mm:ss, dd MMMM yyyy') }}
    </p>
    <p>{{ jobPost.locationType }}</p>

    <p>{{ jobPost.location.address }}</p>
    <p>{{ jobPost.company.name }}</p>
    <p>{{ jobPost.description }}</p>
  </div>
</template>

<script setup>
import { differenceInDays, format } from 'date-fns';
const { data: jobPost } = await useFetch('/api/jobPosts/3');
</script>

<style lang="scss" scoped>
.job-post-detail-company-cover-image {
  width: 80%;
  height: 100%;
  object-fit: cover;
  &-container {
    width: 100%;
    height: 240px;
  }
}
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
