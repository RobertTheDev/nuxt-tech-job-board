<template>
  <div class="candidate-card-container">
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
        <p class="text-md">4 years experience</p>
      </div>
    </div>
    <button>Offer Job</button>
  </div>
</template>

<script setup lang="ts">
import Candidate from '@/models/candidate/types/Candidate';

const candidate = defineProps<Candidate>();
</script>
