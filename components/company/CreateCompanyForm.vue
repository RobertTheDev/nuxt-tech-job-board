<template>
  <div class="modal-header">
    <h6>Create Company</h6>
    <button class="modal-close-button">
      <font-awesome-icon class="modal-close-icon" icon="fa-solid fa-times" />
    </button>
  </div>

  <Form
    class="modal-form"
    :validation-schema="createCompanySchema"
    @submit="handleCreateCompany"
  >
    <!-- NAME -->
    <div class="primary-form-input-content-container">
      <p class="primary-form-input-label-text">Company Name</p>
      <Field
        v-slot="{ field }"
        class="primary-form-input-container"
        name="name"
        type="text"
      >
        <label for="name" class="primary-form-input-label-container">
          <input
            type="text"
            v-bind="field"
            placeholder="Name"
            class="primary-form-input"
          />
        </label>
      </Field>

      <ErrorMessage
        name="name"
        class="primary-form-input-validation-error-message-text"
      />
    </div>

    <!-- DESCRIPTION -->
    <div class="primary-form-input-content-container">
      <p class="primary-form-input-label-text">Company Description</p>
      <Field
        v-slot="{ field }"
        class="primary-form-input-container"
        name="description"
        type="text"
      >
        <label for="description" class="primary-form-input-label-container">
          <input
            type="text"
            v-bind="field"
            placeholder="Description"
            class="primary-form-input"
          />
        </label>
      </Field>

      <ErrorMessage
        name="description"
        class="primary-form-input-validation-error-message-text"
      />
    </div>

    <!-- Logo -->
    <div class="primary-form-input-content-container">
      <p class="primary-form-input-label-text">Company Logo</p>
      <Field
        v-slot="{ field }"
        class="primary-form-input-container"
        name="logo.url"
        type="text"
      >
        <label for="logo.url" class="primary-form-input-label-container">
          <input
            type="text"
            v-bind="field"
            placeholder="Logo"
            class="primary-form-input"
          />
        </label>
      </Field>

      <ErrorMessage
        name="logo.url"
        class="primary-form-input-validation-error-message-text"
      />
    </div>

    <!-- Cover Image -->
    <div class="primary-form-input-content-container">
      <p class="primary-form-input-label-text">Company Cover Image</p>
      <Field
        v-slot="{ field }"
        class="primary-form-input-container"
        name="coverImage.url"
        type="text"
      >
        <label for="coverImage.url" class="primary-form-input-label-container">
          <input
            type="text"
            v-bind="field"
            placeholder="Cover Image"
            class="primary-form-input"
          />
        </label>
      </Field>

      <ErrorMessage
        name="coverImage.url"
        class="primary-form-input-validation-error-message-text"
      />
    </div>

    <!-- Cover Image -->
    <div class="primary-form-input-content-container">
      <p class="primary-form-input-label-text">Company Category</p>
      <Field
        v-slot="{ field }"
        class="primary-form-input-container"
        name="category"
        type="text"
      >
        <label for="category" class="primary-form-input-label-container">
          <input
            type="text"
            v-bind="field"
            placeholder="Category"
            class="primary-form-input"
          />
        </label>
      </Field>

      <ErrorMessage
        name="category"
        class="primary-form-input-validation-error-message-text"
      />
    </div>

    <div class="primary-form-input-content-container">
      <p class="primary-form-input-label-text">Company Employees</p>
      <Field
        v-slot="{ field }"
        class="primary-form-input-container"
        name="totalEmployees"
        type="text"
      >
        <label for="totalEmployees" class="primary-form-input-label-container">
          <input
            type="text"
            v-bind="field"
            placeholder="totalEmployees"
            class="primary-form-input"
          />
        </label>
      </Field>

      <ErrorMessage
        name="totalEmployees"
        class="primary-form-input-validation-error-message-text"
      />
    </div>

    <div class="modal-buttons-container">
      <button class="modal-button">Preview</button>
      <button class="modal-button" type="submit">Create Company</button>
    </div>
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
