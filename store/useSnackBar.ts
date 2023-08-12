import { defineStore } from 'pinia';

export const useSnackBarStore = defineStore('snackBarStore', () => {
  const snackBar = ref<{
    active: boolean;
    type: string | null;
    message: string | null;
  }>({
    active: false,
    type: null,
    message: null,
  });

  function openSnackBar(type: string, message: string) {
    snackBar.value.active = true;
    snackBar.value.type = type;
    snackBar.value.message = message;

    setTimeout(() => {
      snackBar.value.active = false;
    }, 2000);
  }

  return {
    snackBar,
    openSnackBar,
  };
});

export default useSnackBarStore;
