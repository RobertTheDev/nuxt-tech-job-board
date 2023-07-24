export default defineNuxtRouteMiddleware(async () => {
  const { session } = await useSession();

  onUnmounted(() => {
    if (session.value?.user) {
      return navigateTo('/');
    }
  });
});
