<template>
  <Form
    :validation-schema="changePasswordSchema"
    @submit="handleChangePassword"
  >
    <div>
      <Field v-slot="{ field }" name="currentPassword" type="text">
        <label for="currentPassword">
          <input
            type="password"
            v-bind="field"
            placeholder="Current Password"
          />
        </label>
      </Field>
      <ErrorMessage name="currentPassword" />
    </div>

    <div>
      <Field v-slot="{ field }" name="newPassword" type="text">
        <label for="newPassword">
          <input type="password" v-bind="field" placeholder="New Password" />
        </label>
      </Field>
      <ErrorMessage name="newPassword" />
    </div>

    <p v-if="formHandler.errorMessage">
      {{ formHandler.errorMessage }}
    </p>
    <p v-if="formHandler.successMessage">
      {{ formHandler.successMessage }}
    </p>
    <button v-if="formHandler.pending">Loading</button>

    <button v-else type="submit">Update Password</button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import changePasswordSchema from '@/models/settings/validators/changePasswordSchema';

const formHandler = ref<{
  pending: boolean;
  errorMessage: string | undefined;
  successMessage: string | undefined;
}>({
  pending: false,
  errorMessage: undefined,
  successMessage: undefined,
});

async function handleChangePassword(values: any): Promise<void> {
  const { pending, error } = await useFetch('/api/settings/change-password', {
    method: 'PUT',
    body: values,
  });

  if (pending.value) {
    formHandler.value.pending = pending.value;
  } else if (error.value) {
    formHandler.value.errorMessage = error.value.statusMessage;
  } else {
    formHandler.value.successMessage = 'Successfully updated your password.';
  }
}
</script>
