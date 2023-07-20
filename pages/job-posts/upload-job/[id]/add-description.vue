<template>
  <div>
    <h1>Step 4: Add Description</h1>
    <button @click="navigateToNextStep">Next</button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

function navigateToNextStep() {
  router.push('/job-posts/upload-job/1/add-deadline-date');
}

useHead({
  title: 'Upload Job - Add Description',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
