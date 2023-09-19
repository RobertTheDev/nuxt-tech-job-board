<!-- <template>
  <Form :validation-schema="resetPasswordSchema" @submit="handlePasswordReset">
    <Field v-slot="{ field }" name="password" type="password">
      <label for="password">
        <p>Password</p>
        <input type="password" v-bind="field" placeholder="Password" />
      </label>
    </Field>
    <ErrorMessage name="password" />

    <p v-if="formHandler.errorMessage">
      {{ formHandler.errorMessage }}
    </p>
    <p v-if="formHandler.successMessage">
      {{ formHandler.successMessage }}
    </p>

    <button v-if="formHandler.pending">Loading</button>
    <button type="submit">Reset Password</button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import resetPasswordSchema from '@/models/auth/validators/resetPasswordSchema';

const route = useRoute();

const { token } = route.params;

const formHandler = ref<{
  pending: boolean;
  errorMessage: string | undefined;
  successMessage: string | undefined;
}>({
  pending: false,
  errorMessage: undefined,
  successMessage: undefined,
});

function handlePasswordReset() {
  console.log('hello');
}
</script> -->

<template>
  <Form :validation-schema="resetPasswordSchema" @submit="handlePasswordReset">
    <Field v-slot="{ field }" name="password" type="password">
      <label for="password">
        <p>Password</p>
        <input type="password" v-bind="field" placeholder="Password" />
      </label>
    </Field>
    <ErrorMessage name="password" />
    <p v-if="formHandler.errorMessage">
      {{ formHandler.errorMessage }}
    </p>
    <p v-if="formHandler.successMessage">
      {{ formHandler.successMessage }}
    </p>

    <button v-if="formHandler.pending">Loading</button>
    <button v-else type="submit">Reset Password</button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import resetPasswordSchema from '@/models/auth/validators/resetPasswordSchema';

const route = useRoute();

const { token } = route.params;

const formHandler = ref<{
  pending: boolean;
  errorMessage: string | undefined;
  successMessage: string | undefined;
}>({
  pending: false,
  errorMessage: undefined,
  successMessage: undefined,
});

async function handlePasswordReset(values: any): Promise<void> {
  const { pending, error } = await useFetch(
    `/api/auth/reset-password/${token}`,
    {
      method: 'POST',
      body: values,
    },
  );

  if (pending.value) {
    formHandler.value.pending = pending.value;
  } else if (error.value) {
    formHandler.value.errorMessage = error.value.statusMessage;
  } else {
    formHandler.value.successMessage = 'Successfully reset password.';
  }
}
</script>
