<template>
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

    <!-- <button @click="(e) => saveJobPost(e, jobPost._id)">
      <font-awesome-icon icon="fa-regular fa-bookmark" />
    </button> -->

    <button
      v-if="checkJobPostSaved(jobPost._id)"
      @click="(e) => unsaveJobPost(e, jobPost._id)"
    >
      Remove
    </button>

    <button v-else @click="(e) => saveJobPost(e, jobPost._id)">Add</button>

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
import SavedJobPost from '../../lib/types/SavedJobPosts';

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

async function unsaveJobPost(e: MouseEvent, id: string) {
  e.preventDefault();

  await useFetch<SavedJobPost[]>(`/api/saved-job-posts/job-post/${id}/unsave`, {
    method: 'DELETE',
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

const jobPost = defineProps([
  '_id',
  'createdAt',
  'title',
  'locationType',
  'salary',
  'contractType',
  'company',
]);
</script>
