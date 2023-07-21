import { defineStore } from 'pinia';

export const useCreateCompanyModalStore = defineStore(
  'createCompanyModalStore',
  () => {
    const createCompanyModal = ref({
      active: false,
    });

    function openCreateCompanyModal() {
      createCompanyModal.value.active = true;
    }

    function closeCreateCompanyModal() {
      createCompanyModal.value.active = false;
    }

    return {
      createCompanyModal,
      openCreateCompanyModal,
      closeCreateCompanyModal,
    };
  },
);

export default useCreateCompanyModalStore;
