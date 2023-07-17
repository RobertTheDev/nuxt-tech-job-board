<template>
  <div>
    <JobPostDetail v-bind="jobPost" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const { id } = route.params;

const { data: jobPost } = await useFetch(`/api/jobPosts/${id}`);

useHead({
  title: id.toString(),
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
