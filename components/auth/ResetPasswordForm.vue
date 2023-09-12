<template>
  <Form :validation-schema="forgotPasswordSchema" @submit="handleSubmit">
    <div>
      <p>Email</p>
      <Field v-slot="{ field }" name="emailAddress" type="email">
        <label for="emailAddress">
          <input type="email" v-bind="field" placeholder="Email" />
        </label>
      </Field>

      <ErrorMessage name="emailAddress" />
    </div>

    <div>
      <!-- SIGN UP BUTTON -->
      <button type="submit">Reset Password</button>
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
