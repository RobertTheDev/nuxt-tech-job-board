<template>
  <div v-if="globalModal.active" class="modal-wrapper">
    <div ref="target" class="modal-container">
      <LoginForm v-if="globalModal.form === 'login'" />
      <SignUpForm v-if="globalModal.form === 'signUp'" />
      <ChangePasswordForm v-if="globalModal.form === 'forgotPassword'" />
      <CreateCompanyForm v-if="globalModal.form === 'createCompany'" />
      <CreateApplicationForm v-if="globalModal.form === 'createApplication'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import useGlobalModal from '../../store/useGlobalModal';
import CreateCompanyForm from '../company/CreateCompanyForm.vue';
import CreateApplicationForm from '../applications/CreateApplicationForm.vue';

const { globalModal, closeGlobalModal } = useGlobalModal();

const target = ref(null);

onClickOutside(target, closeGlobalModal);
</script>
