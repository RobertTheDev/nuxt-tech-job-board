<template>
  <div class="layout-container">
    <NavigationHeader />
    <NavigationBurgerMenu />
    <main class="main-container">
      <slot />
    </main>
    <NavigationFooter />
  </div>
</template>

<style>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.main-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
}
</style>
