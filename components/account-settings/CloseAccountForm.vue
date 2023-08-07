<template>
  <div>
    <h1>Close Account</h1>
    <p>
      Please enter "CLOSE" and your password to confirm that you wish to close
      your account.
    </p>
    <Form
      class="primary-form-container"
      :validation-schema="closeAccountSchema"
      @submit="handleCloseAccount"
    >
      <div class="primary-form-input-content-container">
        <p class="primary-form-input-label-text">Type "CLOSE":</p>
        <Field
          v-slot="{ field }"
          class="primary-form-input-container"
          name="close"
          type="text"
        >
          <label for="close" class="primary-form-input-label-container">
            <input
              type="text"
              v-bind="field"
              placeholder="Close"
              class="primary-form-input"
            />
          </label>
        </Field>

        <ErrorMessage
          name="close"
          class="primary-form-input-validation-error-message-text"
        />
      </div>

      <div class="primary-form-input-content-container">
        <p class="primary-form-input-label-text">Password:</p>
        <Field
          v-slot="{ field }"
          class="primary-form-input-container"
          name="password"
          type="password"
        >
          <label for="close" class="primary-form-input-label-container">
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
      </div>
      <button class="primary-form-button" type="submit">Close Account</button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import closeAccountSchema from '../../lib/validators/auth/closeAccountSchema';

function handleCloseAccount(values: any) {
  alert(JSON.stringify(values, null, 2));
}
</script>
