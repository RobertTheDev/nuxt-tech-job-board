<template>
  <div>
    <JobPostCard
      v-for="jobPost in jobPosts"
      :key="jobPost.id"
      v-bind="jobPost"
    />
  </div>
</template>

<script setup>
useHead({
  title: 'TechBoard: Job Search',
  meta: [
    {
      name: 'description',
      content:
        'Welcome to TechBoard - Your Gateway to Tech Remote Jobs. Explore a diverse range of remote job opportunities in the tech industry on our cutting-edge platform. TechBoard is dedicated to connecting talented professionals like you with remote positions in programming, software development, web design, and beyond. Discover the perfect work-from-home job that matches your skills and aspirations. Join our thriving community of remote tech enthusiasts and unlock endless possibilities for growth and success. Embrace the future of work and kickstart your rewarding tech career with TechBoard today..',
    },
  ],
});

const { data: jobPosts } = await useFetch('/api/jobPosts');
</script>
