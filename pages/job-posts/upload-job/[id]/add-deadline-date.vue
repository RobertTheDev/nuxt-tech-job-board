<template>
  <div>
    <h1>Step 5: Add Deadline Date</h1>
    <button @click="navigateToNextStep">Next</button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

function navigateToNextStep() {
  router.push('/job-posts/upload-job/1/submit-job-post');
}

useHead({
  title: 'Upload Job - Add Deadline Date',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
