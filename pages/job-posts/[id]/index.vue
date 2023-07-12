<template>
  <div>
    <p>{{ jobPost.title }}</p>
  </div>
</template>

<script setup>
const route = useRoute();

const { id } = route.params;

const { data: jobPost } = await useFetch(`/api/jobPosts/${id}`);

useHead({
  title: id,
});
</script>
