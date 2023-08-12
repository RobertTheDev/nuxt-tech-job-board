import { defineStore } from 'pinia';

export const useGlobalModalStore = defineStore('globalModalStore', () => {
  const globalModal = ref<{ active: boolean; form: string | null }>({
    active: false,
    form: null,
  });

  function openGlobalModal(form: string) {
    globalModal.value.active = true;
    globalModal.value.form = form;
  }

  function closeGlobalModal() {
    globalModal.value.active = false;
    globalModal.value.form = null;
  }

  return {
    globalModal,
    openGlobalModal,
    closeGlobalModal,
  };
});

export default useGlobalModalStore;
