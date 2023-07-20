<template>
  <div>
    <h1>Step 3: Add Location</h1>
    <p>Add Location type</p>
    <button @click="navigateToNextStep">Next</button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

function navigateToNextStep() {
  router.push('/job-posts/upload-job/1/add-description');
}

useHead({
  title: 'Upload Job - Add Location',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
