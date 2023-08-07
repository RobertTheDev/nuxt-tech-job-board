<template>
  <div class="companies-page-container">
    <!-- Page Title. -->
    <h1>Followed Companies</h1>
    <div class="spacer" />

    <!-- Show this when company fetch is loading. -->
    <div v-if="pending">
      <p>Companies loading...</p>
    </div>

    <!-- Show this when company fetch returns an error. -->
    <div v-if="error">
      <p>There was an error trying to display companies. Please try again.</p>
      <button @click="refresh()">Try again.</button>
    </div>

    <!-- Show this when companies are successfully fetched. -->
    <div v-if="companyFollowers">
      <div
        v-if="companyFollowers.length > 0"
        class="company-card-grid-container"
      >
        <div
          v-for="companyFollower of companyFollowers"
          :key="companyFollower._id"
        >
          <img
            class="logo"
            :src="companyFollower.company.logo.url"
            :alt="companyFollower.company.logo.alt"
          />
          <p>{{ companyFollower.company.name }}</p>
          <button @click="(e) => unfollowCompany(e, companyFollower._id)">
            Unfollow
          </button>
        </div>
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
import CompanyFollower from '../../lib/types/CompanyFollower';

// Unauthenticated middleware added to prevent unauthenticated users from accessing this page.
definePageMeta({
  middleware: 'unauthenticated',
});

async function unfollowCompany(e: MouseEvent, id: string) {
  e.preventDefault();

  await useFetch<CompanyFollower[]>(`/api/company-followers/${id}`, {
    method: 'DELETE',
  }).then(() => {
    refresh();
  });
}

// Get owned companies by the authenticated user from the server.
const {
  data: companyFollowers,
  pending,
  error,
  refresh,
} = await useFetch<CompanyFollower[]>(
  `/api/company-followers/authenticated-user`,
);

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

<style lang="scss" scoped>
.companies-page-container {
  padding: 3.2rem;
}

.spacer {
  height: 3.2rem;
}

.logo {
  height: 4rem;
  width: 4rem;
}

.company-card-grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.2rem;
}
</style>
