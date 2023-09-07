<template>
  <Form
    class="primary-form-container"
    :validation-schema="forgotPasswordSchema"
    @submit="handleSubmit"
  >
    <Field
      v-slot="{ field }"
      name="password"
      type="text"
      class="primary-form-input-container"
    >
      <label for="password" class="primary-form-input-label-container">
        <input
          type="password"
          v-bind="field"
          placeholder="Password"
          class="primary-form-input"
        />
      </label>
    </Field>

    <ErrorMessage
      name="password"
      class="primary-form-input-validation-error-message-text"
    />

    <Field
      v-slot="{ field }"
      name="confirmPassword"
      type="text"
      class="primary-form-input-container"
    >
      <label for="confirmPassword" class="primary-form-input-label-container">
        <input
          type="password"
          v-bind="field"
          placeholder="Confirm Password"
          class="primary-form-input"
        />
      </label>
    </Field>
    <ErrorMessage
      name="confirmPassword"
      class="primary-form-input-validation-error-message-text"
    />

    <div class="primary-form-footer-container">
      <!-- SIGN UP BUTTON -->
      <button class="primary-form-button" type="submit">Reset Password</button>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import forgotPasswordSchema from '@/models/auth/validators/forgotPasswordSchema';

function handleSubmit(values: any) {
  alert(JSON.stringify(values, null, 2));
}
</script>
