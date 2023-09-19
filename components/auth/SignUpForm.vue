<template>
  <Form :validation-schema="signUpSchema" @submit="handleSignUp">
    <Field v-slot="{ field }" name="emailAddress" type="email">
      <label for="emailAddress">
        <input type="email" v-bind="field" placeholder="Email" />
      </label>
    </Field>
    <ErrorMessage name="emailAddress" />

    <Field v-slot="{ field }" name="password" type="password">
      <label for="password">
        <input type="password" v-bind="field" placeholder="Password" />
      </label>
    </Field>
    <ErrorMessage name="password" />

    <Field v-slot="{ field }" name="firstName" type="text">
      <label for="firstName">
        <input type="firstName" v-bind="field" placeholder="First Name" />
      </label>
    </Field>
    <ErrorMessage name="firstName" />

    <Field v-slot="{ field }" name="lastName" type="text">
      <label for="lastName">
        <input type="lastName" v-bind="field" placeholder="Last Name" />
      </label>
    </Field>
    <ErrorMessage name="lastName" />

    <p v-if="formHandler.errorMessage">
      {{ formHandler.errorMessage }}
    </p>
    <p v-if="formHandler.successMessage">
      {{ formHandler.successMessage }}
    </p>
    <button v-if="formHandler.pending" class="auth-form-button">Loading</button>
    <button v-else class="auth-form-button" type="submit">Sign Up</button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import signUpSchema from '@/models/auth/validators/signUpSchema';

const formHandler = ref<{
  pending: boolean;
  errorMessage: string | undefined;
  successMessage: string | undefined;
}>({
  pending: false,
  errorMessage: undefined,
  successMessage: undefined,
});

async function handleSignUp(values: any): Promise<void> {
  const { pending, error } = await useFetch('/api/auth/sign-up', {
    method: 'POST',
    body: values,
  });

  if (pending.value) {
    formHandler.value.pending = pending.value;
  } else if (error.value) {
    formHandler.value.errorMessage = error.value.statusMessage;
  } else {
    formHandler.value.successMessage = 'User successfully signed up.';
  }
}
</script>
