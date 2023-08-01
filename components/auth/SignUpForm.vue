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
        <NuxtLink
          id="sign-up-form-login-link"
          class="primary-form-header-link"
          to="/auth/login"
        >
          Login</NuxtLink
        >.
      </p>
    </div>

    <div class="primary-form-input-content-container">
      <p class="primary-form-input-label-text">Email</p>
      <Field
        v-slot="{ field }"
        class="primary-form-input-container"
        name="emailAddress"
        type="email"
      >
        <label for="emailAddress" class="primary-form-input-label-container">
          <input
            type="email"
            v-bind="field"
            placeholder="Email"
            class="primary-form-input"
          />
        </label>
      </Field>

      <ErrorMessage
        name="emailAddress"
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
            id="sign-up-form-reveal-button"
            type="button"
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
      <PasswordValidator
        v-for="signUpValidatorRule in signUpValidatorRules"
        :key="signUpValidatorRule"
        >{{ signUpValidatorRule }}</PasswordValidator
      >
    </ul>

    <p v-if="form.loading">Loading ...</p>
    <p v-if="form.error">Error!</p>
    <div class="primary-form-footer-container">
      <!-- SIGN UP BUTTON -->
      <button id="sign-up-button" class="primary-form-button" type="submit">
        Sign Up
      </button>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import signUpSchema from '../../lib/validators/signUpSchema';
import signUpValidatorRules from '../../lib/constants/signUpValidatorRules';
import apiUrls from '../../lib/constants/apiUrls';

const router = useRouter();

const passwordVisible = ref<boolean>(false);
const form = reactive({
  loading: false,
  error: false,
});

async function handleSignUp(values: any) {
  form.loading = true;
  await useFetch(apiUrls.auth.signUp, {
    method: 'POST',
    body: values,
  })
    .then(() => {
      form.loading = false;
      router.push('/');
    })
    .catch((err) => {
      if (err) {
        form.error = true;
        form.loading = false;
      }
    });
}

function togglePasswordVisibility() {
  passwordVisible.value = !passwordVisible.value;
}
</script>
