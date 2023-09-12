<template>
  <div>
    <NavigationHeader />
    <NavigationBurgerMenu />
    <main>
      <NavigationGlobalModal />

      <slot />
      <NavigationSnackBar />
    </main>
    <NavigationFooter />
  </div>
</template>
