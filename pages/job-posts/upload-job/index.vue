<template>
  <div class="page-container">
    <!-- PAGE CONTENT. -->
    <!-- Page Title. -->
    <h1>Upload A Job Post - Select A Company To Get Started</h1>
    <!-- Page Description. -->
    <p>
      Select a company this job post is for to get started. If you do not
      currently have an associated company for the job post you can quickly
      create one by selecting the create company button.
    </p>

    <!-- USER'S OWNED COMPANIES. -->

    <!-- If Loading User's Companies Is Pending Show This Message. -->
    <div v-if="pending">
      <p>Trying to fetch companies...</p>
    </div>

    <!-- If Loading User's Companies Has Finished Show This Content. -->
    <div v-else>
      <div class="">
        <h4>Your Companies</h4>
        <!-- Create Company Modal Button. -->
        <button>Create Company</button>
      </div>
      <!-- If No Companies Exist Show This Message. -->
      <div v-if="!companyOwners">
        <p>
          You currently have no companies set up. Click create company above to
          get started.
        </p>
      </div>
      <!-- If Companies Exist Show The List. -->
      <div v-else class="select-company-card-grid">
        <!-- Companies Owned By User List. -->
        <button
          v-for="companyOwner of companyOwners"
          :key="companyOwner._id"
          :class="
            selectedCompanyId === companyOwner.companyId
              ? 'select-company-card-container-selected'
              : 'select-company-card-container'
          "
          @click="selectCompany(companyOwner.companyId)"
        >
          <div class="select-company-card-logo-container">
            <img
              class="select-company-card-logo-image"
              :src="companyOwner.company.logo.url"
              :alt="companyOwner.company.logo.alt"
            />
          </div>
          <p>{{ companyOwner.company.name }}</p>
        </button>
      </div>
    </div>

    <!-- If An Error Occurs Trying To Fetch Companies Show This Message And Action Button. -->
    <div v-if="error">
      <p>There was an error trying to retieve companies. Please try again.</p>
      <button @click="refresh()">Try Again</button>
    </div>

    <!-- Next Step Button. -->
    <button
      v-if="selectedCompanyId"
      :disabled="selectedCompanyId === undefined"
      @click="navigateToNextStep(selectedCompanyId)"
    >
      Next
    </button>
    <button v-else disabled>Next</button>
  </div>
</template>

<script setup lang="ts">
import CompanyOwner from 'lib/types/CompanyOwner';
import JobPost from 'lib/types/JobPost';

// Use Nuxt 3 Router For Programmatic Routing.
const router = useRouter();

// If User Is Not Signed In Then Send Them To Sign Up And Login Pages.
// definePageMeta({
//   middleware: 'unauthenticated',
// });

const selectedCompanyId = ref<string | undefined>(undefined);

function selectCompany(id: string) {
  selectedCompanyId.value = id;
}

// Fetch Owned Companies By The Authenticated User From The Server.
const {
  data: companyOwners,
  pending,
  error,
  refresh,
} = await useFetch<CompanyOwner[]>(`/api/company-owners/authenticated-user`);

// Navigate To Next Step Of Uploading Job After Selecting Company.
async function navigateToNextStep(companyId: string) {
  const { data: jobPost } = await useFetch<JobPost>(`/api/job-posts`, {
    method: 'POST',
    body: {
      companyId,
    },
  });

  if (jobPost.value) {
    router.push(`/job-posts/upload-job/${jobPost.value?._id}/add-title`);
  }
}

// SEO Title And Description.
useHead({
  title: 'Upload A Job Post',
  meta: [
    {
      name: 'description',
      content: `
      Upload a job post today to find new talent and future employees for your 
      tech business. Set up a company and get started 
      by uploading a new job post on TechBoard.`,
    },
  ],
});
</script>

<style lang="scss" scoped>
.page-container {
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
}
.select-company {
  &-card {
    &-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.6rem;
      padding: 1.6rem;
    }
    &-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 1.6rem;

      border-radius: 1.6rem;
      &-selected {
        border: 2px solid #8046ef;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.6rem;
        border-radius: 1.6rem;
      }
    }
    &-logo {
      &-image {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
      &-container {
        height: 12rem;
        width: 12rem;
        border-radius: 100%;
        overflow: hidden;
      }
    }
  }
}
</style>
models/types/CompanyOwnermodels/types/JobPost
