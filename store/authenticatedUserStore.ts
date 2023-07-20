import { defineStore } from 'pinia';

export const useAuthenticatedUserStore = defineStore(
  'authenticatedUserStore',
  () => {
    const authenticatedUser = ref<null | { email: string }>(null);

    return {
      authenticatedUser,
    };
  },
);

export default useAuthenticatedUserStore;
