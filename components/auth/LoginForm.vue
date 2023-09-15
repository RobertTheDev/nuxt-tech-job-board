<template>
  <div class="auth-form-container">
    <div class="auth-form-header">
      <h1 class="text-lg">Login</h1>
      <p>
        Don't have an account?
        <NuxtLink to="/auth/sign-up">Sign up</NuxtLink>.
      </p>
    </div>

    <Form :validation-schema="loginSchema" @submit="handleLogin">
      <div class="auth-form-input-container">
        <label for="emailAddress" class="auth-form-input-label">
          <p>Email</p>
          <Field v-slot="{ field }" name="emailAddress" type="email">
            <input
              class="auth-form-input"
              type="email"
              v-bind="field"
              placeholder="Email"
            />
            <button
              id="sign-up-form-reveal-button"
              type="button"
              @click.prevent="togglePasswordVisibility"
            >
              {{ passwordVisible ? 'Hide' : 'Show' }}
            </button>
          </Field>
        </label>
        <ErrorMessage name="emailAddress" />
      </div>

      <div class="auth-form-input-container">
        <label for="password" class="auth-form-input-label">
          <p>Password</p>
          <Field v-slot="{ field }" name="password" type="text">
            <input
              class="auth-form-input"
              :type="passwordVisible ? 'text' : 'password'"
              v-bind="field"
              placeholder="Password"
            />
          </Field>
        </label>
        <NuxtLink @click="navigate('/auth/forgot-password')"
          >Forgot password?</NuxtLink
        >
        <ErrorMessage name="password" />
      </div>

      <p v-if="formHandler.errorMessage">
        {{ formHandler.errorMessage }}
      </p>
      <button v-if="formHandler.pending" class="auth-form-button" type="submit">
        Loading
      </button>
      <button v-else class="auth-form-button" type="submit">Login</button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import loginSchema from '@/models/auth/validators/loginSchema';
import FormHandler from '@/models/config/form/FormHandler';

const router = useRouter();

const passwordVisible = ref<boolean>(false);

const formHandler = ref<FormHandler>({
  pending: false,
  errorMessage: undefined,
});

function navigate(href: string): void {
  router.push(href);
}

function togglePasswordVisibility(): void {
  passwordVisible.value = !passwordVisible.value;
}

async function handleLogin(values: any): Promise<void> {
  const { pending, error } = await useFetch('/api/auth/login', {
    method: 'POST',
    body: values,
  });

  if (pending.value) {
    formHandler.value.pending = pending.value;
  } else if (error.value) {
    formHandler.value.errorMessage = error.value.statusMessage;
  } else {
    window.location.reload();
  }
}
</script>
