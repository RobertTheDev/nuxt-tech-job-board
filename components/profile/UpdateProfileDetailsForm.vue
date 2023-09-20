<template>
  <Form :validation-schema="updateUserSchema" @submit="handleUpdateProfile">
    <Field v-slot="{ field }" name="" type="text">
      <label for="cv">
        <input type="text" v-bind="field" placeholder="cv" />
      </label>
    </Field>
    <ErrorMessage name="cv" />

    <Field v-slot="{ field }" name="dateOfBirth" type="text">
      <label for="dateOfBirth">
        <input type="text" v-bind="field" placeholder="dateOfBirth" />
      </label>
    </Field>
    <ErrorMessage name="dateOfBirth" />

    <Field v-slot="{ field }" name="isLookingFor" type="text">
      <label for="isLookingFor">
        <input type="text" v-bind="field" placeholder="isLookingFor" />
      </label>
    </Field>
    <ErrorMessage name="isLookingFor" />

    <Field v-slot="{ field }" name="isWillingToRelocate" type="text">
      <label for="isWillingToRelocate">
        <input type="text" v-bind="field" placeholder="isWillingToRelocate" />
      </label>
    </Field>
    <ErrorMessage name="isWillingToRelocate" />

    <Field v-slot="{ field }" name="" type="text">
      <label for="jobTitle">
        <input type="text" v-bind="field" placeholder="jobTitle" />
      </label>
    </Field>
    <ErrorMessage name="jobTitle" />

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
