<template>
  <Form
    :validation-schema="sendPasswordResetTokenSchema"
    @submit="handleSendPasswordResetToken"
  >
    <Field v-slot="{ field }" name="emailAddress" type="email">
      <label for="emailAddress">
        <p>Email Address</p>
        <input type="email" v-bind="field" placeholder="Email" />
      </label>
    </Field>
    <ErrorMessage name="emailAddress" />
    <p v-if="formHandler.errorMessage">
      {{ formHandler.errorMessage }}
    </p>
    <p v-if="formHandler.successMessage">
      {{ formHandler.successMessage }}
    </p>

    <button v-if="formHandler.pending">Loading</button>
    <button v-else type="submit">Send Password Reset</button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import sendPasswordResetTokenSchema from '@/models/auth/validators/sendPasswordResetTokenSchema';

const formHandler = ref<{
  pending: boolean;
  errorMessage: string | undefined;
  successMessage: string | undefined;
}>({
  pending: false,
  errorMessage: undefined,
  successMessage: undefined,
});

async function handleSendPasswordResetToken(values: any): Promise<void> {
  const { pending, error } = await useFetch(
    '/api/auth/reset-password/send-token',
    {
      method: 'POST',
      body: values,
    },
  );

  if (pending.value) {
    formHandler.value.pending = pending.value;
  } else if (error.value) {
    formHandler.value.errorMessage = error.value.statusMessage;
  } else {
    formHandler.value.successMessage =
      'Successfully sent password reset email.';
  }
}
</script>
