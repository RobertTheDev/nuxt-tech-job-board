<template>
  <div>
    <h1>Step 2: Add Contract Details</h1>
    <p>Add Contract type</p>
    <label for="create-job-post-contact-type-input">
      <select>
        <option>Full-time</option>
        <option>Part-time</option>
        <option>Contract</option>
      </select>
    </label>
    <p>Add salary</p>
    <p>Minimum salary</p>
    <input />
    <p>Maximum salary</p>
    <input />
    <p>Rate</p>
    <label for="create-job-post-contact-type-input">
      <select>
        <option>Monthly</option>
        <option>Hourly</option>
        <option>Daily</option>
        <option>Weekly</option>
        <option>Annually</option>
      </select>
    </label>
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
