import authenticatedUserStore from '@/store/authenticatedUserStore';

export default defineNuxtRouteMiddleware(() => {
  const { authenticatedUser } = authenticatedUserStore();

  if (!authenticatedUser) {
    return navigateTo('/');
  }
});
