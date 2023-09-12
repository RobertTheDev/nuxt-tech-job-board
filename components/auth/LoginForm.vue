<template>
  <Form :validation-schema="loginSchema" @submit="handleLogin">
    <div>
      <p>
        Don't have an account?
        <button @click="navigate('/auth/sign-up')">Sign up.</button>
      </p>
    </div>
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
      <p>Password</p>

      <Field v-slot="{ field }" name="password" type="text">
        <div>
          <label for="password">
            <input
              :type="passwordVisible ? 'text' : 'password'"
              v-bind="field"
              placeholder="Password"
            />
          </label>
          <button
            id="sign-up-form-reveal-button"
            type="button"
            @click.prevent="togglePasswordVisibility"
          >
            {{ passwordVisible ? 'Hide' : 'Show' }}
          </button>
        </div>
      </Field>

      <NuxtLink @click="navigate('/auth/forgot-password')"
        >Forgot password?</NuxtLink
      >

      <ErrorMessage name="password" />
    </div>

    <p v-if="formHandler.errorMessage">
      {{ formHandler.errorMessage }}
    </p>
    <div>
      <button v-if="formHandler.pending" type="submit">Loading</button>
      <button v-else type="submit">Login</button>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import loginSchema from '@/models/auth/validators/loginSchema';
import FormHandler from '@/models/config/form/FormHandler';

const router = useRouter();

function navigate(href: string) {
  router.push(href);
}

const passwordVisible = ref<boolean>(false);

function togglePasswordVisibility() {
  passwordVisible.value = !passwordVisible.value;
}

const formHandler = ref<FormHandler>({
  pending: false,
  errorMessage: undefined,
});

async function handleLogin(values: any) {
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
