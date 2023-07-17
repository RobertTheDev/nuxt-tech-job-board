import { defineStore } from 'pinia';

export const useCreateJobPostStore = defineStore('createJobPost', () => {
  const createJobForm = ref({
    companyId: null,
    contractType: null,
    deadlineDate: null,
    description: null,
    location: null,
    locationType: null,
    requirements: [],
    salary: {
      max: null,
      min: null,
    },
    skills: [],
    slug: null,
    title: null,
  });

  function uploadJob() {
    alert(JSON.stringify(createJobForm.value));
  }

  return { createJobForm, uploadJob };
});

export default useCreateJobPostStore;
