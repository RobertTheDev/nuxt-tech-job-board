import { defineStore } from 'pinia';

export const useBurgerMenuStore = defineStore('burgerMenuStore', () => {
  const burgerMenu = ref({
    active: false,
  });

  function openBurgerMenu() {
    burgerMenu.value.active = true;
  }

  function closeBurgerMenu() {
    burgerMenu.value.active = false;
  }

  return {
    burgerMenu,
    openBurgerMenu,
    closeBurgerMenu,
  };
});

export default useBurgerMenuStore;
