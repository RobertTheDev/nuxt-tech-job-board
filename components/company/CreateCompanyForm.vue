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
import createCompanySchema from '../../lib/validators/companies/createCompanySchema';
import FormHandler from '../../lib/types/FormHandler';

const formHandler = ref<FormHandler>({
  pending: false,
  errorMessage: undefined,
});

async function handleCreateCompany(values: any) {
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

// const totalEmployees = [
//   '<100',
//   '100-500',
//   '500-1000',
//   '1000-5000',
//   '5000-10000',
//   '10000+',
// ];
</script>

<style lang="scss">
.cover-image-selector {
  height: 120px;
  aspect-ratio: 16/9;
  background: lightgray;
  border-radius: 0.8rem;
}

.image-selectors {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
}

.logo-selector {
  height: 120px;
  width: 120px;
  border-radius: 100%;
  background: lightgray;
}

.modal {
  &-buttons-container {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1.6rem;
  }
  &-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
    width: 100%;
  }
  &-input {
    height: 100%;
    width: 100%;
    padding: 0 0.8rem;
    border-radius: 0.4rem;
    border: 1px solid lightgray;
    font-size: 1.4rem;
    &-container {
      height: 5.4rem;
      width: 100%;
    }
  }
  &-button {
    height: 5.4rem;
    flex: 1;
    padding: 0 0.8rem;
    border-radius: 0.4rem;
    background: #8046ef;
    color: white;
    font-size: 1.4rem;
  }
  &-wrapper {
    min-height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;

    top: 0px;
  }

  &-close {
    &-button {
      height: 3.2rem;
      width: 3.2rem;
      border-radius: 100%;
    }
    &-icon {
      font-size: 1.4rem;
    }
  }

  &-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  &-container {
    width: 560px;
    background: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 1.6rem;
    margin: 4rem;
    max-height: 640px;
    overflow: hidden;
    overflow-y: scroll;
    gap: 2.4rem;
  }
}
</style>
