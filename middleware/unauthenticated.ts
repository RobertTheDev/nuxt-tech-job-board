import authenticatedUserStore from '@/store/useAuthenticatedUserStore';

export default defineNuxtRouteMiddleware(() => {
  const { authenticatedUser } = authenticatedUserStore();

  if (!authenticatedUser) {
    return navigateTo('/auth/login');
  }
});
