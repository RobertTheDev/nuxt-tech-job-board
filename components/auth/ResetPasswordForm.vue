<template>
  <Form :validation-schema="resetPasswordSchema" @submit="handleSubmit">
    <Field v-slot="{ field }" name="password" type="password">
      <label for="password">
        <p>Password</p>
        <input type="password" v-bind="field" placeholder="Password" />
      </label>
    </Field>
    <ErrorMessage name="password" />
    <button type="submit">Reset Password</button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import resetPasswordSchema from '@/models/auth/validators/resetPasswordSchema';

function handleSubmit(values: any): void {
  alert(JSON.stringify(values, null, 2));
}
</script>
