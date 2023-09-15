<template>
  <div>
    <!-- Page Title. -->
    <h1>Followed Companies</h1>

    <!-- Show this when companies are successfully fetched. -->
    <div v-if="companyFollowers">
      <div v-if="companyFollowers.length > 0">
        <CompanyCard
          v-for="companyFollower of companyFollowers"
          :key="companyFollower._id"
          v-bind="companyFollower.company"
        />
      </div>

      <!-- Show this when company fetch is loading. -->
      <div v-if="pending">
        <p>Companies loading...</p>
      </div>

      <!-- Show this when company fetch returns an error. -->
      <div v-if="error">
        <p>There was an error trying to display companies. Please try again.</p>
        <button @click="refresh()">Try again.</button>
      </div>

      <!-- Show this when no companies are returned from the fetch. -->
      <div v-else>
        <p>
          You have not followed any companies yet. When you follow companies on
          TechBoard they will appear here.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CompanyFollower from '@/models/companyFollower/types/CompanyFollower';

// Get owned companies by the authenticated user from the server.
const {
  data: companyFollowers,
  pending,
  error,
  refresh,
} = await useFetch<CompanyFollower[]>(
  `/api/company-followers/authenticated-user`,
);

definePageMeta({
  middleware: ['unauthenticated'],
});

// Companies page SEO title and description.
useHead({
  title: 'Followed Companies',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
