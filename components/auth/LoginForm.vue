<template>
  <div>
    <Form
      class="form-container"
      :validation-schema="loginSchema"
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

      <Field v-slot="{ field }" name="password" type="text">
        <label for="password">
          <input type="password" v-bind="field" placeholder="Password" />
        </label>
      </Field>

      <ErrorMessage name="password" />
      <NuxtLink to="/auth/forgot-password">Forgot password?</NuxtLink>
      <NuxtLink to="/auth/sign-up">Don't have an account? Sign up.</NuxtLink>

      <button class="form-button">Login</button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import loginSchema from '../../lib/validators/loginSchema';

function handleSubmit(values: any) {
  alert(JSON.stringify(values, null, 2));
}
</script>
