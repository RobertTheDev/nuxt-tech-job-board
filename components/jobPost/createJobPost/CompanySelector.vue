<template>
  <div>
    <!-- USER'S OWNED COMPANIES. -->

    <!-- If Loading User's Companies Is Pending Show This Message. -->
    <div v-if="pending">
      <p>Trying to fetch companies...</p>
    </div>

    <!-- If Loading User's Companies Has Finished Show This Content. -->
    <div v-else>
      <div>
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
      <div v-else>
        <!-- Companies Owned By User List. -->
        <button
          v-for="companyOwner of companyOwners"
          :key="companyOwner._id"
          class="company-select-card-container"
          @click="selectCompany(companyOwner.companyId)"
        >
          <div class="company-select-card-image-container">
            <img
              class="company-select-card-image"
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
import CompanyOwner from '@/models/companyOwner/types/CompanyOwner';
import JobPost from '@/models/jobPost/types/JobPost';

// Use Nuxt 3 Router For Programmatic Routing.
const router = useRouter();

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
    router.push(`/upload-job/${jobPost.value?._id}/add-title`);
  }
}
</script>
