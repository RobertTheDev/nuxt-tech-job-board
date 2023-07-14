<template>
  <div>
    <Form
      class="form-container"
      :validation-schema="forgotPasswordSchema"
      @submit="handleSubmit"
    >
      <div class="form-input-container">
        <Field v-slot="{ field }" name="email" type="email">
          <label for="email" class="form-input">
            <input
              type="email"
              v-bind="field"
              placeholder="Email"
              class="form-input"
            />
          </label>
        </Field>

        <ErrorMessage name="email" />
      </div>

      <NuxtLink to="/auth/login">Back to login.</NuxtLink>
      <NuxtLink to="/auth/sign-up">Don't have an account? Sign up.</NuxtLink>

      <button class="form-button">Send</button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import forgotPasswordSchema from '../../lib/validators/forgotPasswordSchema';

function handleSubmit(values: any) {
  alert(JSON.stringify(values, null, 2));
}
</script>
