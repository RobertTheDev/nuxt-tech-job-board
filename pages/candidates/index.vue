<template>
  <div class="candidate-page-container">
    <h1 class="text-3xl bold">Candidates</h1>
    <div class="candidate-card-list">
      <div
        v-for="candidate in candidates"
        :key="candidate.id"
        class="candidate-card-container"
      >
        <div class="candidate-card-top-container">
          <div class="candidate-card-avatar-container">
            <img
              class="candidate-card-avatar-image"
              :src="candidate.avatar.url"
              :alt="candidate.name"
            />
          </div>
        </div>
        <div class="candidate-card-bottom-container">
          <div class="candidate-card-content-container">
            <p class="text-lg bold">{{ candidate.name }}</p>
            <p class="text-md">{{ candidate.jobTitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

const candidates = [
  {
    id: '1',
    avatar: {
      url: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80',
    },
    name: 'Gary Allen',
    jobTitle: 'Database Engineer',
  },
  {
    id: '2',
    avatar: {
      url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    },
    name: 'Jennifer Haze',
    jobTitle: 'Software Developer',
  },
  {
    id: '3',
    avatar: {
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
    },
    name: 'Lucy Andrews',
    jobTitle: 'Data Scientist',
  },
  {
    id: '4',
    avatar: {
      url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80',
    },
    name: 'John Davids',
    jobTitle: 'Backend Developer',
  },
  {
    id: '5',
    avatar: {
      url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    },
    name: 'Mary Brown',
    jobTitle: 'Frontend Developer',
  },
  {
    id: '6',
    avatar: {
      url: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    },
    name: 'Steven Davidson',
    jobTitle: 'UX Designer',
  },
];

useHead({
  title: `Find Candidates | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `Discover top candidates to work for your company today on ${companyName}.  Discover top talent in the tech industry today and find successful candidates to develop and grow your business.`,
    },
  ],
});
</script>
