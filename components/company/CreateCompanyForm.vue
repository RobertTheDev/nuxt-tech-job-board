<template>
  <Form :validation-schema="createCompanySchema" @submit="handleCreateCompany">
    <!-- NAME -->
    <Field v-slot="{ field }" name="name" type="text">
      <label for="name">
        <p>Company Name</p>
        <input id="name" type="text" v-bind="field" placeholder="Name" />
      </label>
    </Field>
    <ErrorMessage name="name" />

    <!-- DESCRIPTION -->
    <Field v-slot="{ field }" name="description" type="text">
      <label for="description">
        <p>Company Description</p>
        <input
          id="description"
          type="text"
          v-bind="field"
          placeholder="Description"
        />
      </label>
    </Field>
    <ErrorMessage name="description" />

    <!-- Logo -->

    <Field v-slot="{ field }" name="logo.url" type="text">
      <label for="logo.url">
        <p>Company Logo</p>
        <input id="logo.url" type="text" v-bind="field" placeholder="Logo" />
      </label>
    </Field>
    <ErrorMessage name="logo.url" />

    <!-- Cover Image -->

    <Field v-slot="{ field }" name="coverImage.url" type="text">
      <label for="coverImage.url">
        <p>Company Cover Image</p>
        <input
          id="coverImage.url"
          type="text"
          v-bind="field"
          placeholder="Cover Image"
        />
      </label>
    </Field>
    <ErrorMessage name="coverImage.url" />

    <!-- Category -->

    <Field v-slot="{ field }" name="category" type="text">
      <label for="category">
        <p>Company Category</p>
        <input
          id="category"
          type="text"
          v-bind="field"
          placeholder="Category"
        />
      </label>
    </Field>
    <ErrorMessage name="category" />

    <!-- Employees -->

    <Field v-slot="{ field }" name="totalEmployees" type="text">
      <label for="totalEmployees">
        <p>Company Employees</p>
        <input
          id="totalEmployees"
          type="text"
          v-bind="field"
          placeholder="totalEmployees"
        />
      </label>
    </Field>
    <ErrorMessage name="totalEmployees" />

    <button>Preview</button>
    <button type="submit">Create Company</button>
  </Form>
</template>

<script lang="ts" setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import createCompanySchema from '@/models/company/validators/createCompanySchema';
import FormHandler from '@/models/config/form/FormHandler';

const formHandler = ref<FormHandler>({
  pending: false,
  errorMessage: undefined,
});

async function handleCreateCompany(values: any): Promise<void> {
  const { pending, error, data } = await useFetch('/api/companies', {
    method: 'POST',
    body: values,
  });

  if (pending.value) {
    formHandler.value.pending = pending.value;
  }

  if (error.value) {
    formHandler.value.errorMessage = error.value.statusMessage;
  }

  if (data) {
    window.location.reload();
  }
}
</script>
