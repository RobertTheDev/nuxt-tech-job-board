export default defineNuxtRouteMiddleware(async () => {
  const { session } = await useSession();

  onMounted(() => {
    if (!session.value?.user) {
      return navigateTo('/');
    }
  });
});
