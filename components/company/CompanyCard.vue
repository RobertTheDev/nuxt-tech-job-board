<template>
  <!-- Links the component card to the company page using Nuxt Link. -->
  <NuxtLink class="company-card-container" :to="`/companies/${company._id}`">
    <!-- Card logo. -->
    <div class="company-card-logo-container">
      <img
        :src="company.logo.url"
        :alt="company.logo.alt"
        class="company-card-logo-image"
      />
    </div>

    <!-- Card details. -->
    <p>{{ company.name }}</p>
    <p>{{ company.totalEmployees }}</p>
    <p>{{ company.category }}</p>
    <p>{{ company.description }}</p>
    <button @click="(e) => followCompany(e, company._id)">Follow</button>
  </NuxtLink>
</template>

<script setup lang="ts">
import CompanyFollower from 'lib/types/CompanyFollower';

// Defines the props to be passed into the company card component.
const company = defineProps([
  // eslint-disable-next-line vue/prop-name-casing
  '_id',
  'logo',
  'name',
  'totalEmployees',
  'category',
  'description',
]);

async function followCompany(e: MouseEvent, id: string) {
  e.preventDefault();

  await useFetch<CompanyFollower[]>(`/api/company-followers/company/${id}`, {
    method: 'POST',
  });
}

// async function unfollowCompany(e: MouseEvent, id: string) {
//   e.preventDefault();

//   await useFetch<CompanyFollower[]>(`/api/company-followers/${id}`, {
//     method: 'DELETE',
//   }).then(() => {
//     refresh();
//   });
// }
</script>

<style lang="scss" scoped>
.company-card {
  &-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid lightgrey;
    padding: 1.6rem;
    border-radius: 1rem;
  }
  &-logo {
    &-container {
      height: 10rem;
      width: 10rem;
      border-radius: 100%;
      overflow: hidden;
    }
    &-image {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
