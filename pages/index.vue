<template>
  <div>
    <p>Home</p>
    <NuxtLink to="/job-posts/upload-job"> Upload Job </NuxtLink>

    <NuxtLink
      v-for="jobPost in jobPosts"
      :key="jobPost.id"
      :to="`/job-posts/${jobPost.id}`"
    >
      <p>{{ jobPost.title }}</p>
    </NuxtLink>
  </div>
</template>

<script setup>
useHead({
  title: 'Home',
});

const { data: jobPosts } = await useFetch('/api/jobPosts');
</script>
