<template>
  <div>
    <NavigationHeader />
    <MobileHeader />
    <NavigationBurgerMenu />
    <main>
      <NavigationGlobalModal />

      <slot />
      <NavigationSnackBar />
    </main>
    <NavigationFooter />
  </div>
</template>
