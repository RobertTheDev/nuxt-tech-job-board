<template>
  <Form
    class="primary-form-container"
    :validation-schema="changePasswordSchema"
    @submit="handleChangePassword"
  >
    <div class="primary-form-input-content-container">
      <Field
        v-slot="{ field }"
        class="primary-form-input-container"
        name="currentPassword"
        type="text"
      >
        <label for="currentPassword" class="primary-form-input-label-container">
          <input
            class="primary-form-input"
            type="password"
            v-bind="field"
            placeholder="Current Password"
          />
        </label>
      </Field>
      <ErrorMessage
        name="currentPassword"
        class="primary-form-input-validation-error-message-text"
      />
    </div>

    <div class="primary-form-input-content-container">
      <Field
        v-slot="{ field }"
        class="primary-form-input-container"
        name="newPassword"
        type="text"
      >
        <label for="newPassword" class="primary-form-input-label-container">
          <input
            class="primary-form-input"
            type="password"
            v-bind="field"
            placeholder="New Password"
          />
        </label>
      </Field>
      <ErrorMessage
        name="newPassword"
        class="primary-form-input-validation-error-message-text"
      />
    </div>
    <p
      v-if="formHandler.errorMessage"
      class="primary-form-input-validation-error-message-text"
    >
      {{ formHandler.errorMessage }}
    </p>

    <button
      v-if="formHandler.pending"
      class="primary-form-button"
      type="submit"
    >
      Loading
    </button>
    <button v-else class="primary-form-button" type="submit">
      Change Password
    </button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import changePasswordSchema from '@/models/settings/validators/changePasswordSchema';
import FormHandler from '@/models/config/form/FormHandler';

const formHandler = ref<FormHandler>({
  pending: false,
  errorMessage: undefined,
});

async function handleChangePassword(values: any): Promise<void> {
  const { pending, error } = await useFetch('/api/auth/change-password', {
    method: 'PUT',
    body: values,
  });

  if (pending.value) {
    formHandler.value.pending = pending.value;
  }

  if (error.value) {
    formHandler.value.errorMessage = error.value.statusMessage;
  }
}
</script>
