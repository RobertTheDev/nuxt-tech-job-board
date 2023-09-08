<template>
  <div class="job-card">
    <div class="job-card-header">
      <div class="job-post-card-company-logo-container">
        <img
          :src="jobPost.company.logo.url"
          :alt="jobPost.company.logo.alt"
          class="job-post-card-company-logo-image"
        />
      </div>
    </div>
    <p>{{ jobPost.company.name }}</p>

    <p>
      Posted
      {{
        formatDistanceToNow(new Date(jobPost.createdAt), {
          addSuffix: true,
        })
      }}
    </p>
    <div class="job-card-title">{{ jobPost.title }}</div>
    <div class="job-card-subtitle">
      {{ jobPost.description }}
    </div>
    <div class="job-detail-buttons">
      <button class="search-buttons detail-button">
        {{ jobPost.locationType }}
      </button>
      <button class="search-buttons detail-button">
        {{ jobPost.contractType }}
      </button>
      <button class="search-buttons detail-button">
        £{{ jobPost.salary.min.toLocaleString() }} -
        {{ jobPost.salary.max.toLocaleString() }}
      </button>
    </div>
    <div class="job-card-buttons">
      <button class="search-buttons card-buttons">Apply Now</button>
      <button class="search-buttons card-buttons-msg">Save Job</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDistanceToNow } from 'date-fns';
import JobPost from '@/models/jobPost/types/JobPost';

const jobPost = defineProps<JobPost>();
</script>

<style lang="scss" scoped>
.card-buttons,
.card-buttons-msg {
  padding: 10px;
  width: 100%;
  font-size: 12px;
  cursor: pointer;
}

.search-buttons {
  border: none;
  color: var(--button-color);
  background-color: var(--active-color);
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  margin-top: 14px;
}
.detail-button {
  background-color: var(--active-light-color);
  color: var(--active-color);
  font-size: 11px;
  font-weight: 500;
  padding: 6px 8px;
  border-radius: 4px;
  & + & {
    margin-left: 4px;
  }
}

.job-detail-buttons {
  display: flex;
}

.card-buttons {
  margin-right: 12px;
  &-msg {
    background-color: var(--inactive-color);
    color: var(--subtitle-color);
  }
}
.job-card-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 4px;
}
.job-card {
  padding: 20px 16px;
  background-color: var(--header-bg-color);
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: scale(1.02);
  }
  svg {
    width: 46px;
    padding: 10px;
    border-radius: 8px;
  }
  &-title {
    font-weight: 600;
    margin-top: 16px;
    font-size: 14px;
  }
  &-subtitle {
    color: var(--subtitle-color);
    font-size: 13px;
    margin-top: 14px;
    line-height: 1.6em;
  }
  &-header {
    display: flex;
    align-items: flex-start;
  }
}
</style>

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
