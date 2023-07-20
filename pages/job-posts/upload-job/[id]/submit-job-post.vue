<template>
  <div>
    <h1>Step 6: Submit Job Post</h1>
    <a href="/job-posts/upload-job/1/preview" target="_blank">Preview</a>

    <button @click="navigateToNextStep">Submit</button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

function navigateToNextStep() {
  router.push('/job-posts/upload-job/1/submit-job-post');
}

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
