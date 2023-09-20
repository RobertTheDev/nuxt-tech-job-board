<template>
  <Form :validation-schema="closeAccountSchema" @submit="handleCloseAccount">
    <div>
      <p>Type "CLOSE":</p>
      <Field v-slot="{ field }" name="close" type="text">
        <label for="close">
          <input type="text" v-bind="field" placeholder="Close" />
        </label>
      </Field>

      <ErrorMessage name="close" />
    </div>

    <div>
      <p>Password:</p>
      <Field v-slot="{ field }" name="password" type="password">
        <label for="close">
          <input type="password" v-bind="field" placeholder="Password" />
        </label>
      </Field>

      <ErrorMessage name="password" />
    </div>

    <p v-if="formHandler.errorMessage">
      {{ formHandler.errorMessage }}
    </p>
    <p v-if="formHandler.successMessage">
      {{ formHandler.successMessage }}
    </p>
    <button v-if="formHandler.pending">Loading</button>

    <button v-else type="submit">Close Account</button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import closeAccountSchema from '@/models/settings/validators/closeAccountSchema';

const formHandler = ref<{
  pending: boolean;
  errorMessage: string | undefined;
  successMessage: string | undefined;
}>({
  pending: false,
  errorMessage: undefined,
  successMessage: undefined,
});

async function handleCloseAccount(values: any): Promise<void> {
  const { pending, error } = await useFetch('/api/settings/close-account', {
    method: 'DELETE',
    body: values,
  });

  if (pending.value) {
    formHandler.value.pending = pending.value;
  } else if (error.value) {
    formHandler.value.errorMessage = error.value.statusMessage;
  } else {
    formHandler.value.successMessage = 'Successfully deleted your account.';
  }
}
</script>
