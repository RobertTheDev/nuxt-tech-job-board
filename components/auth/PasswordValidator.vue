<template>
  <li class="password-validator-container" :class="validationClass">
    <div>
      <font-awesome-icon :icon="iconClass" class="icon" />
    </div>
    <slot></slot>
  </li>
</template>

<script>
export default {
  props: {
    isValid: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    validationClass() {
      return this.isValid ? 'green' : 'red';
    },
    iconClass() {
      return this.isValid
        ? 'fa-regular fa-circle-check'
        : 'fa-regular fa-circle-xmark';
    },
  },
};
</script>

<style scoped>
.icon {
  font-size: 1.6rem;
}
.password-validator-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0rem;
}
</style>
