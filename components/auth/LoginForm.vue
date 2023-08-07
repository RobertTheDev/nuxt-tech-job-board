<template>
  <Form
    class="primary-form-container"
    :validation-schema="loginSchema"
    @submit="handleLogin"
  >
    <div class="primary-form-header-container">
      <h1>Login</h1>
      <!-- LOGIN LINK -->
      <p class="primary-form-header-text">
        Don't have an account?
        <NuxtLink class="primary-form-header-link" to="/auth/sign-up">
          Sign up.</NuxtLink
        >
      </p>
    </div>
    <div class="primary-form-input-content-container">
      <p class="primary-form-input-label-text">Email</p>
      <Field
        v-slot="{ field }"
        class="primary-form-input-container"
        name="emailAddress"
        type="email"
      >
        <label for="emailAddress" class="primary-form-input-label-container">
          <input
            type="email"
            v-bind="field"
            placeholder="Email"
            class="primary-form-input"
          />
        </label>
      </Field>

      <ErrorMessage
        name="emailAddress"
        class="primary-form-input-validation-error-message-text"
      />
    </div>

    <div class="primary-form-input-content-container">
      <p class="primary-form-input-label-text">Password</p>

      <Field
        v-slot="{ field }"
        class="primary-form-input-container"
        name="password"
        type="text"
      >
        <label for="password" class="primary-form-input-label-container">
          <input
            class="primary-form-input"
            type="password"
            v-bind="field"
            placeholder="Password"
          />
        </label>
      </Field>
      <NuxtLink class="primary-form-link" to="/auth/forgot-password"
        >Forgot password?</NuxtLink
      >

      <ErrorMessage
        class="primary-form-input-validation-error-message-text"
        name="password"
      />
    </div>

    <p
      v-if="formHandler.errorMessage"
      class="primary-form-input-validation-error-message-text"
    >
      {{ formHandler.errorMessage }}
    </p>
    <div class="primary-form-footer-container">
      <!-- SIGN UP BUTTON -->

      <button
        v-if="formHandler.pending"
        class="primary-form-button"
        type="submit"
      >
        Loading
      </button>
      <button v-else class="primary-form-button" type="submit">Login</button>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import loginSchema from '../../lib/validators/loginSchema';
import FormHandler from '../../lib/types/FormHandler';

const formHandler = ref<FormHandler>({
  pending: false,
  errorMessage: undefined,
});

async function handleLogin(values: any) {
  const { pending, error } = await useFetch('/api/auth/login', {
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
