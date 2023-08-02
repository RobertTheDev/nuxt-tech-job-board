<template>
  <!-- Content. -->
  <div>
    <p>{{ companyOwner.company.name }}</p>
    <div>
      <!-- Button navigates to company's edit page. -->
      <button
        @click="
          navigateTo(`/companies/${companyOwner.company._id}/edit-company`)
        "
      >
        Edit Company
      </button>
      <!-- Button navigates to company's content page. -->
      <button @click="navigateTo(`/companies/${companyOwner.company._id}`)">
        View Company
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import Nuxt useRouter for custom navigation.
const router = useRouter();

// Define props to be passed into the component.
const companyOwner = defineProps({
  company: {
    name: String,
    required: true,
  },
});

// Create navigate to path using Nuxt router.
function navigateTo(path: string) {
  router.push(path);
}
</script>
