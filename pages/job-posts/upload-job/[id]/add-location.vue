<template>
  <div>
    <h1>Step 3: Add Location</h1>
    <p>Add Location type</p>
    <label for="locationType">
      <select>
        <option>Remote</option>
        <option>Hybrid</option>
        <option>On-Premise</option>
      </select>
    </label>

    <form id="addressForm" @submit.prevent="navigateToNextStep">
      <label for="fullName"
        >Full Name:
        <input type="text" name="fullName" required />
      </label>

      <label for="streetAddress"
        >Street Address:
        <input type="text" name="streetAddress" required />
      </label>

      <label for="city">City: <input type="text" name="city" required /></label>

      <label for="state"
        >State/Province: <input type="text" name="state" required
      /></label>

      <label for="postalCode"
        >Postal Code:
        <input type="text" name="postalCode" required />
      </label>

      <label for="country"
        >Country:
        <input type="text" name="country" required />
      </label>

      <button type="submit">Next</button>
    </form>
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
