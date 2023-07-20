<template>
  <div>
    <h1>Step 1: Add Title</h1>
    <p>Now lets add some details about the job post.</p>
    <p>Add title</p>
    <button @click="navigateToNextStep">Next</button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

function navigateToNextStep() {
  router.push('/job-posts/upload-job/1/add-contract-details');
}

useHead({
  title: 'Upload Job - Add Title',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
