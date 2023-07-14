<template>
  <div>
    <Form
      class="form-container"
      :validation-schema="signUpSchema"
      @submit="handleSubmit"
    >
      <Field v-slot="{ field }" name="password" type="text">
        <label for="password">
          <input type="password" v-bind="field" placeholder="Password" />
        </label>
      </Field>

      <ErrorMessage name="password" />

      <Field v-slot="{ field }" name="confirmPassword" type="text">
        <label for="confirmPassword">
          <input
            type="password"
            v-bind="field"
            placeholder="Confirm Password"
          />
        </label>
      </Field>
      <ErrorMessage name="confirmPassword" />

      <button class="form-button">Reset Password</button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import signUpSchema from '../../lib/validators/signUpSchema';

function handleSubmit(values: any) {
  alert(JSON.stringify(values, null, 2));
}
</script>
