<template>
  <Form
    class="primary-form-container"
    :validation-schema="forgotPasswordSchema"
    @submit="handleSubmit"
  >
    <div class="primary-form-header-container">
      <h1>Forgot password</h1>
      <!-- LOGIN LINK -->

      <NuxtLink class="primary-form-header-link" to="/auth/login"
        >Back to login.</NuxtLink
      >
    </div>

    <Field
      v-slot="{ field }"
      name="email"
      type="email"
      class="primary-form-input-container"
    >
      <label for="email" class="primary-form-input-label-container">
        <input
          type="email"
          v-bind="field"
          placeholder="Email"
          class="primary-form-input"
        />
      </label>
    </Field>

    <ErrorMessage
      name="email"
      class="primary-form-input-validation-error-message-text"
    />

    <div class="primary-form-footer-container">
      <!-- SIGN UP BUTTON -->
      <button class="primary-form-button" type="submit">Send</button>
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
