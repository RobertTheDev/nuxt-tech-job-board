<template>
  <div class="page-container">
    <div class="content-container">
      <ContentDoc />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
}
.content-container {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 3.2rem;
  @media (min-width: 640px) {
    width: 50%;
  }
}
</style>
