<template>
  <Form
    class="primary-form-container"
    :validation-schema="signUpSchema"
    @submit="handleSignUp"
  >
    <div class="primary-form-header-container">
      <h1>Sign Up</h1>
      <!-- LOGIN LINK -->
      <p class="primary-form-header-text">
        Already have an account?
        <NuxtLink class="primary-form-header-link" to="/auth/login">
          Login.</NuxtLink
        >
      </p>
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
      <p class="primary-form-input-label-text">First Name</p>
      <Field
        v-slot="{ field }"
        class="primary-form-input-container"
        name="firstName"
        type="text"
      >
        <label for="firstName" class="primary-form-input-label-container">
          <input
            type="text"
            v-bind="field"
            placeholder="First Name"
            class="primary-form-input"
          />
        </label>
      </Field>

      <ErrorMessage
        name="firstName"
        class="primary-form-input-validation-error-message-text"
      />
    </div>

    <div class="primary-form-input-content-container">
      <p class="primary-form-input-label-text">Last Name</p>

      <Field
        v-slot="{ field }"
        class="primary-form-input-container"
        name="lastName"
        type="text"
      >
        <label for="lastName" class="primary-form-input-label-container">
          <input
            type="text"
            v-bind="field"
            placeholder="Last Name"
            class="primary-form-input"
          />
        </label>
      </Field>

      <ErrorMessage
        name="lastName"
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
    <!-- PASSWORD VAALIDATORS -->
    <ul class="form-password-validators-container">
      <PasswordValidator> 8 characters minimum </PasswordValidator>

      <PasswordValidator>
        One uppercase and one lowercase letter
      </PasswordValidator>

      <PasswordValidator> One number </PasswordValidator>

      <PasswordValidator> One special character </PasswordValidator>
    </ul>

    <div class="primary-form-footer-container">
      <!-- SIGN UP BUTTON -->
      <button class="primary-form-button" type="submit">Sign Up</button>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import signUpSchema from '../../lib/validators/signUpSchema';

function handleSignUp(values: any) {
  alert(JSON.stringify(values, null, 2));
}

const passwordVisible = ref(false);

function togglePasswordVisibility() {
  passwordVisible.value = !passwordVisible.value;
}
</script>

<style scoped lang="scss">
.reveal-button {
  height: 100%;
  aspect-ratio: 1/1;
  border-radius: 0.5rem;
  background: none;
  text-decoration: underline;
  font-weight: 500;
}

.reveal-icon {
  font-size: 1.4rem;
}
</style>
