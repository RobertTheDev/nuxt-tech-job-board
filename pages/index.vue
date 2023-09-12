<template>
  <div class="job-posts-page-container">
    <div class="job-posts-page-filter-menu-container">
      <div class="job-post-filter-menu">
        <JobPostFilterMenu />
      </div>
    </div>
    <div class="job-posts-page-card-list-container">
      <div class="job-post-card-list">
        <JobPostCard
          v-for="jobPost in jobPosts"
          :key="jobPost._id"
          v-bind="jobPost"
        />
      </div>
    </div>
    <div class="job-posts-page-preview-container">
      <div class="job-post-preview-container">
        <p>Preview</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';
import JobPost from '@/models/jobPost/types/JobPost';

const {
  data: jobPosts,
  // pending,
  // error,
  // refresh,
} = await useFetch<JobPost[]>('/api/job-posts');

useHead({
  title: `Job Search | ${companyName} `,
  meta: [
    {
      name: 'description',
      content: `Welcome to ${companyName} - an online platform for finding tech jobs. Explore a diverse range of remote job opportunities in the tech industry on our cutting-edge platform. ${companyName} is dedicated to connecting talented professionals like you with remote positions in programming, software development, web design, and beyond. Discover the perfect work-from-home job that matches your skills and aspirations. Join our thriving community of remote tech enthusiasts and unlock endless possibilities for growth and success. Embrace the future of work and kickstart your rewarding tech career with ${companyName} today.`,
    },
  ],
});
</script>

<style lang="scss">
.job {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: var(--theme-bg-color);
}
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: auto;
  padding: 0px 40px;
}

.main-container {
  display: flex;
  flex-grow: 1;
  width: 100%;
}

.job-cards {
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  animation: slideY 0.6s both;
  //display: none;
  @media screen and (max-width: 1212px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 930px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
