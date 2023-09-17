<template>
  <Form
    class="primary-form-container"
    :validation-schema="sendEmailVerificationTokenSchema"
    @submit="sendEmailVerificationToken"
  >
    <div class="primary-form-input-content-container">
      <Field
        v-slot="{ field }"
        class="primary-form-input-container"
        name="emailAddress"
        type="text"
      >
        <label for="emailAddress" class="primary-form-input-label-container">
          <input
            class="primary-form-input"
            type="email"
            v-bind="field"
            placeholder="Enter Email Address"
          />
        </label>
      </Field>
      <ErrorMessage
        name="emailAddress"
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
      Send Email Verification
    </button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import sendEmailVerificationTokenSchema from '@/models/settings/validators/sendEmailVerificationTokenSchema';
import FormHandler from '@/models/config/form/FormHandler';

const formHandler = ref<FormHandler>({
  pending: false,
  errorMessage: undefined,
});

async function sendEmailVerificationToken(values: any): Promise<void> {
  const { pending, error } = await useFetch('/api/settings/verify-email', {
    method: 'POST',
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
