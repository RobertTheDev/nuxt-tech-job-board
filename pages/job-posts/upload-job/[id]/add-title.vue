<template>
  <div>
    <h1>Step 1: Add Title</h1>
    <p>Now lets add some details about the job post.</p>
    <form class="primary-form-container" @submit.prevent="navigateToNextStep">
      <p>Add title</p>
      <input class="primary-form-input-container" />
      <button type="submit">Next</button>
    </form>
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
