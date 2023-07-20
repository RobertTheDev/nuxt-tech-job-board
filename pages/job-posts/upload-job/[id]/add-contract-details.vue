<template>
  <div>
    <h1>Step 2: Add Contract Details</h1>
    <p>Add Contract type</p>
    <p>Add salary</p>
    <button @click="navigateToNextStep">Next</button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

function navigateToNextStep() {
  router.push('/job-posts/upload-job/1/add-location');
}

useHead({
  title: 'Upload Job - Add Contract Details',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
