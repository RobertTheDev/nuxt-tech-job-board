<template>
  <div class="job-post-card-container">
    <div class="job-post-card-header-container">
      <div class="job-post-card-company-logo-container">
        <img
          :src="jobPost.company.logo.url"
          :alt="jobPost.company.logo.alt"
          class="job-post-card-company-logo-image"
        />
      </div>
      <div class="job-post-card-header-content-container">
        <p class="text-md bold">{{ jobPost.title }}</p>
        <p class="text-sm">{{ jobPost.company.name }}</p>
      </div>
    </div>
    <div class="job-post-card-content-container">
      <p class="text-sm bold">
        Posted
        {{
          formatDistanceToNow(new Date(jobPost.createdAt), {
            addSuffix: true,
          })
        }}
      </p>

      <div class="job-detail-group">
        <div class="job-post-card-detail-group">
          <div class="job-post-card-detail-container">
            <p class="text-xs bold">{{ jobPost.locationType }}</p>
          </div>
          <div class="job-post-card-detail-container">
            <p class="text-xs bold">{{ jobPost.contractType }}</p>
          </div>
        </div>
        <p class="text-xs bold">
          £{{ jobPost.salary.min.toLocaleString() }} -
          {{ jobPost.salary.max.toLocaleString() }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDistanceToNow } from 'date-fns';
import JobPost from '@/models/jobPost/types/JobPost';

const jobPost = defineProps<JobPost>();
</script>

<!-- <template>
  <div
    class="job-post-card-container"
    role="presentation"
    @click="navigateToJobPost(jobPost._id)"
    @keydown.enter="navigateToJobPost(jobPost._id)"
  >
    <div class="job-post-card-company-container">
      <div class="job-post-card-company-logo-container">
        <img
          :src="jobPost.company.logo.url"
          :alt="jobPost.company.logo.alt"
          class="job-post-card-company-logo-image"
        />
      </div>
      <div class="job-post-card-company-content-container">
        <p>{{ jobPost.company.name }}</p>

        <p>
          Posted
          {{
            formatDistanceToNow(new Date(jobPost.createdAt), {
              addSuffix: true,
            })
          }}
        </p>
      </div>
    </div>
    <button @click="openGlobalModal('createApplication')">Apply</button>

    <button @click="(e) => saveJobPost(e, jobPost._id)">
      <font-awesome-icon icon="fa-regular fa-bookmark" />
      {{ checkJobPostSaved(jobPost._id) ? 'Remove' : 'Add' }}
    </button>

    <p>{{ jobPost.title }}</p>
    <div class="job-post-card-details-container">
      <p>{{ jobPost.locationType }}</p>
      <p>{{ jobPost.contractType }}</p>
    </div>

    <p>
      £{{ jobPost.salary.min.toLocaleString() }} -
      {{ jobPost.salary.max.toLocaleString() }}
    </p>
    <p>{{ jobPost.salary.rate }}</p>
  </div>
</template>

<script setup lang="ts">
import { formatDistanceToNow } from 'date-fns';
import useGlobalModal from '../../store/useGlobalModal';
import SavedJobPost from '@/models/savedJobPost/types/SavedJobPosts';
import JobPost from '@/models/jobPost/types/JobPost';

const { openGlobalModal } = useGlobalModal();

const router = useRouter();

function navigateToJobPost(id: string) {
  router.replace({ name: '', query: { id } });
}

async function saveJobPost(e: MouseEvent, id: string) {
  e.preventDefault();

  await useFetch<SavedJobPost[]>(`/api/saved-job-posts/job-post/${id}`, {
    method: 'POST',
  });
}

const { data } = await useFetch<SavedJobPost[]>(
  `/api/saved-job-posts/authenticated-user/non-related-list`,
  {
    method: 'GET',
  },
);

function checkJobPostSaved(jobPostId: string) {
  return data.value?.find((props) => {
    return props.jobPostId === jobPostId;
  });
}

const jobPost = defineProps<JobPost>();
</script> -->
