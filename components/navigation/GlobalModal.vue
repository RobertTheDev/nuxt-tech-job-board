<template>
  <div v-if="globalModal.active" class="modal-wrapper">
    <div ref="target" class="modal-container">
      <LoginForm v-if="globalModal.form === 'login'" />
      <SignUpForm v-if="globalModal.form === 'signUp'" />
      <ChangePasswordForm v-if="globalModal.form === 'forgotPassword'" />
      <CreateCompanyForm v-if="globalModal.form === 'createCompany'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import useGlobalModal from '../../store/useGlobalModal';
import CreateCompanyForm from '../company/CreateCompanyForm.vue';

const { globalModal, closeGlobalModal } = useGlobalModal();

const target = ref(null);

onClickOutside(target, closeGlobalModal);
</script>

<style lang="scss" scoped>
.modal {
  &-wrapper {
    background: rgba(0, 0, 0, 0.4);
    min-height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 3rem;
  }
  &-container {
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 54rem;
  }
}
</style>
