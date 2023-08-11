<template>
  <div>
    <div v-if="company">
      <div>
        <img
          class="company-page-logo"
          :src="company.logo.url"
          :alt="company.logo.alt"
        />
      </div>
      <p>{{ company.name }}</p>
      <p>{{ company.description }}</p>
      <p>{{ company.category }}</p>
      <p>{{ company.totalEmployees }} employees</p>
      <div v-for="owner of company.owners" :key="owner._id">
        <p>{{ owner.firstName }}</p>
        <p>{{ owner.lastName }}</p>
      </div>
      <h4>Job Posts</h4>

      <p v-for="jobPost in company.jobPosts" :key="jobPost._id">
        {{ jobPost.title }}
      </p>
    </div>
    <div v-else>
      <p>No company</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Company from '../../../lib/types/Company';

const route = useRoute();

const { slug } = route.params;

const { data: company } = await useFetch<Company | null>(
  `/api/companies/${slug}`,
);

useHead({
  title: company.value ? company.value.name : 'Company',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>

<style lang="scss">
.company-page-logo {
  height: 10rem;
  width: 10rem;
}
</style>
