<template>
  <Form
    class="primary-form-container"
    :validation-schema="accountSettingsSchema"
    @submit="handleAccountSettingsUpdate"
  >
    <h1>Account Settings</h1>

    <div class="primary-form-input-content-container">
      <p class="primary-form-input-label-text">First Name</p>
      <Field
        v-slot="{ field }"
        class="primary-form-input-container"
        name="firstName"
        type="text"
      >
        <label for="firstName" class="primary-form-input-label-container">
          <input
            type="text"
            v-bind="field"
            placeholder="First Name"
            class="primary-form-input"
          />
        </label>
      </Field>

      <ErrorMessage
        name="firstName"
        class="primary-form-input-validation-error-message-text"
      />
    </div>
    <div class="primary-form-input-content-container">
      <p class="primary-form-input-label-text">Last Name</p>
      <Field
        v-slot="{ field }"
        class="primary-form-input-container"
        name="surname"
        type="text"
      >
        <label for="surname" class="primary-form-input-label-container">
          <input
            type="text"
            v-bind="field"
            placeholder="Last Name"
            class="primary-form-input"
          />
        </label>
      </Field>

      <ErrorMessage
        name="surname"
        class="primary-form-input-validation-error-message-text"
      />
    </div>

    <div class="primary-form-input-content-container">
      <p class="primary-form-input-label-text">Home Phone</p>
      <Field
        v-slot="{ field }"
        class="primary-form-input-container"
        name="homePhone"
        type="text"
      >
        <label for="homePhone" class="primary-form-input-label-container">
          <input
            type="text"
            v-bind="field"
            placeholder="Home Phone"
            class="primary-form-input"
          />
        </label>
      </Field>

      <ErrorMessage
        name="homePhone"
        class="primary-form-input-validation-error-message-text"
      />
    </div>

    <div class="primary-form-input-content-container">
      <p class="primary-form-input-label-text">Mobile Phone</p>
      <Field
        v-slot="{ field }"
        class="primary-form-input-container"
        name="mobilePhone"
        type="text"
      >
        <label for="mobilePhone" class="primary-form-input-label-container">
          <input
            type="text"
            v-bind="field"
            placeholder="Mobile Phone"
            class="primary-form-input"
          />
        </label>
      </Field>

      <ErrorMessage
        name="mobilePhone"
        class="primary-form-input-validation-error-message-text"
      />
    </div>

    <div class="primary-form-input-content-container">
      <p class="primary-form-input-label-text">Company</p>
      <Field
        v-slot="{ field }"
        class="primary-form-input-container"
        name="company"
        type="text"
      >
        <label for="website" class="primary-form-input-label-container">
          <input
            type="text"
            v-bind="field"
            placeholder="Company"
            class="primary-form-input"
          />
        </label>
      </Field>

      <ErrorMessage
        name="company"
        class="primary-form-input-validation-error-message-text"
      />
    </div>

    <div class="primary-form-input-content-container">
      <p class="primary-form-input-label-text">Website</p>
      <Field
        v-slot="{ field }"
        class="primary-form-input-container"
        name="website"
        type="text"
      >
        <label for="website" class="primary-form-input-label-container">
          <input
            type="text"
            v-bind="field"
            placeholder="Website"
            class="primary-form-input"
          />
        </label>
      </Field>

      <ErrorMessage
        name="website"
        class="primary-form-input-validation-error-message-text"
      />
    </div>

    <button class="primary-form-button" type="submit">
      Update Account Settings
    </button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import accountSettingsSchema from '../../lib/validators/accountSettings/accountSettingsSchema';

function handleAccountSettingsUpdate() {}
</script>
