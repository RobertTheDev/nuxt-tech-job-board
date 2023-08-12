import { defineStore } from 'pinia';

export const useSnackBarStore = defineStore('snackBarStore', () => {
  const snackBar = ref<{ active: boolean }>({
    active: false,
  });

  function openSnackBar() {
    snackBar.value.active = true;
  }

  function closeSnackBar() {
    snackBar.value.active = false;
  }

  return {
    snackBar,
    openSnackBar,
    closeSnackBar,
  };
});

export default useSnackBarStore;
