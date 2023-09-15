<template>
  <div>
    <h1>Step 6: Submit Job Post</h1>
    <a href="/job-posts/upload-job/1/preview" target="_blank">Preview</a>
    <p>{{ JSON.stringify(jobPost) }}</p>
    <button @click="navigateToNextStep">Submit</button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();

const { id } = route.params;

function navigateToNextStep() {
  router.push('/job-posts/upload-job/1/submit-job-post');
}

const { data: jobPost } = await useFetch(`/api/job-posts/${id}`);

definePageMeta({
  middleware: ['unauthenticated'],
});

useHead({
  title: 'Upload Job - Submit Job Post',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
