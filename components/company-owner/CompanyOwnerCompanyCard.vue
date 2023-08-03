<template>
  <!-- Content. -->
  <div class="card-container">
    <div class="card-logo-container">
      <img
        class="card-logo-image"
        :src="companyOwner.company.logo.url"
        :alt="companyOwner.company.logo.alt"
      />
    </div>

    <p>{{ companyOwner.company.name }}</p>
    <div class="card-button-group">
      <!-- Button navigates to company's edit page. -->
      <button
        class="card-button"
        @click="
          navigateTo(`/companies/${companyOwner.company._id}/edit-company`)
        "
      >
        Edit
      </button>
      <!-- Button navigates to company's content page. -->
      <button
        class="card-button"
        @click="navigateTo(`/companies/${companyOwner.company._id}`)"
      >
        View
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

<style scoped lang="scss">
.card {
  &-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    background: white;
    width: 320px;
    padding: 16px;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  &-logo {
    &-container {
      height: 100px;
      width: 100px;
      border-radius: 100%;
      overflow: hidden;
    }
    &-image {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  &-button {
    width: 100%;
    &-group {
      align-items: center;
      display: flex;
      gap: 16px;
      width: 100%;
    }
  }
}
</style>
