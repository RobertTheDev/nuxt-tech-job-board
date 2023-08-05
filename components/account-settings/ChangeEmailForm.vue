<template>
  <Form
    class="primary-form-container"
    :validation-schema="changeEmailSchema"
    @submit="handleChangeEmail"
  >
    <div class="primary-form-header-container">
      <h1>Change Email</h1>
    </div>
    <div class="primary-form-input-content-container">
      <p class="primary-form-input-label-text">Email</p>
      <Field
        v-slot="{ field }"
        class="primary-form-input-container"
        name="email"
        type="email"
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
    </div>

    <div class="primary-form-input-content-container">
      <p class="primary-form-input-label-text">Password</p>

      <Field v-slot="{ field }" name="password" type="text">
        <div class="primary-form-input-container">
          <label for="password" class="primary-form-input-label-container">
            <input
              class="primary-form-input"
              :type="passwordVisible ? 'text' : 'password'"
              v-bind="field"
              placeholder="Password"
            />
          </label>
          <button
            class="reveal-button"
            @click.prevent="togglePasswordVisibility"
          >
            {{ passwordVisible ? 'Hide' : 'Show' }}
          </button>
        </div>
      </Field>

      <ErrorMessage
        class="primary-form-input-validation-error-message-text"
        name="password"
      />
    </div>

    <div class="primary-form-footer-container">
      <!-- SIGN UP BUTTON -->
      <button class="primary-form-button" type="submit">
        Change Email Address
      </button>
    </div>
  </Form>
</template>

<script lang="ts" setup>
import { Form, Field } from 'vee-validate';
import changeEmailSchema from '@/lib/validators/auth/changeEmailSchema';

const passwordVisible = ref<boolean>(false);

function togglePasswordVisibility() {
  passwordVisible.value = !passwordVisible.value;
}

function handleChangeEmail(values: any) {
  alert(JSON.stringify(values, null, 2));
}
</script>
