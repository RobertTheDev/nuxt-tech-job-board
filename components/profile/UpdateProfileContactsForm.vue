<template>
  <Form :validation-schema="updateUserSchema" @submit="handleUpdateProfile">
    <Field v-slot="{ field }" name="contact.mobilePhoneNumber" type="text">
      <label for="contact.mobilePhoneNumber">
        <input
          type="text"
          v-bind="field"
          placeholder="contact.mobilePhoneNumber"
        />
      </label>
    </Field>
    <ErrorMessage name="contact.mobilePhoneNumber" />

    <Field v-slot="{ field }" name="contact.landlinePhoneNumber" type="text">
      <label for="contact.landlinePhoneNumber">
        <input
          type="text"
          v-bind="field"
          placeholder="contact.landlinePhoneNumber"
        />
      </label>
    </Field>
    <ErrorMessage name="contact.landlinePhoneNumber" />

    <Field v-slot="{ field }" name="contact.emailAddress" type="email">
      <label for="contact.emailAddress">
        <input type="text" v-bind="field" placeholder="contact.emailAddress" />
      </label>
    </Field>
    <ErrorMessage name="contact.emailAddress" />

    <Field v-slot="{ field }" name="contact.websiteUrl" type="text">
      <label for="contact.websiteUrl">
        <input type="text" v-bind="field" placeholder="contact.websiteUrl" />
      </label>
    </Field>
    <ErrorMessage name="contact.websiteUrl" />

    <Field v-slot="{ field }" name="contact.githubAccountUrl" type="text">
      <label for="contact.githubAccountUrl">
        <input
          type="text"
          v-bind="field"
          placeholder="contact.githubAccountUrl"
        />
      </label>
    </Field>
    <ErrorMessage name="linkedInAccountUrl" />

    <Field v-slot="{ field }" name="contact.linkedInAccountUrl" type="text">
      <label for="contact.linkedInAccountUrl">
        <input
          type="text"
          v-bind="field"
          placeholder="contact.linkedInAccountUrl"
        />
      </label>
    </Field>
    <ErrorMessage name="linkedInAccountUrl" />

    <Field v-slot="{ field }" name="contact.xAccountUrl" type="text">
      <label for="contact.xAccountUrl">
        <input type="url" v-bind="field" placeholder="contact.xAccountUrl" />
      </label>
    </Field>
    <ErrorMessage name="contact.xAccountUrl" />

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
