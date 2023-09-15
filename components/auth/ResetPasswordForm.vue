<template>
  <Form :validation-schema="forgotPasswordSchema" @submit="handleSubmit">
    <Field v-slot="{ field }" name="emailAddress" type="email">
      <label for="emailAddress">
        <p>Email Address</p>
        <input type="email" v-bind="field" placeholder="Email" />
      </label>
    </Field>
    <ErrorMessage name="emailAddress" />
    <button type="submit">Reset Password</button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import forgotPasswordSchema from '@/models/auth/validators/forgotPasswordSchema';

function handleSubmit(values: any): void {
  alert(JSON.stringify(values, null, 2));
}
</script>
