import { defineStore } from 'pinia';

export const useProfileMenuStore = defineStore('profileMenuStore', () => {
  const profileMenu = ref({
    active: false,
  });

  function openProfileMenu() {
    profileMenu.value.active = true;
  }

  function closeProfileMenu() {
    profileMenu.value.active = false;
  }

  return {
    profileMenu,
    openProfileMenu,
    closeProfileMenu,
  };
});

export default useProfileMenuStore;
