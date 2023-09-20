<template>
  <Form :validation-schema="updateUserSchema" @submit="handleUpdateProfile">
    <Field v-slot="{ field }" name="address.street" type="text">
      <label for="address.street">
        <input type="text" v-bind="field" placeholder="address.street" />
      </label>
    </Field>
    <ErrorMessage name="address.street" />

    <Field v-slot="{ field }" name="address.city" type="text">
      <label for="address.city">
        <input type="text" v-bind="field" placeholder="address.city" />
      </label>
    </Field>
    <ErrorMessage name="address.city" />

    <Field v-slot="{ field }" name="address.state" type="text">
      <label for="address.state">
        <input type="text" v-bind="field" placeholder="address.state" />
      </label>
    </Field>
    <ErrorMessage name="address.state" />

    <Field v-slot="{ field }" name="address.postalCode" type="text">
      <label for="address.postalCode">
        <input type="text" v-bind="field" placeholder="address.postalCode" />
      </label>
    </Field>
    <ErrorMessage name="address.postalCode" />

    <Field v-slot="{ field }" name="address.country" type="text">
      <label for="address.country">
        <input type="text" v-bind="field" placeholder="address.country" />
      </label>
    </Field>
    <ErrorMessage name="address.country" />

    <p v-if="formHandler.errorMessage">
      {{ formHandler.errorMessage }}
    </p>
    <p v-if="formHandler.successMessage">
      {{ formHandler.successMessage }}
    </p>
    <button v-if="formHandler.pending">Loading</button>
    <button v-else type="submit">Update Profile</button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import updateUserSchema from '@/models/user/validators/updateUserSchema';

const formHandler = ref<{
  pending: boolean;
  errorMessage: string | undefined;
  successMessage: string | undefined;
}>({
  pending: false,
  errorMessage: undefined,
  successMessage: undefined,
});

async function handleUpdateProfile(values: any): Promise<void> {
  const { pending, error } = await useFetch('/api/profile', {
    method: 'PUT',
    body: values,
  });

  if (pending.value) {
    formHandler.value.pending = pending.value;
  } else if (error.value) {
    formHandler.value.errorMessage = error.value.statusMessage;
  } else {
    formHandler.value.successMessage = 'Profile successfully updated.';
  }
}
</script>
