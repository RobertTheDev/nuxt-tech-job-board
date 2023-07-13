<template>
  <div>
    <Form
      class="form-container"
      :validation-schema="signUpSchema"
      @submit="handleSubmit"
    >
      <div class="form-input-container">
        <Field v-slot="{ field }" name="email" type="email">
          <label for="email" class="form-input">
            <input
              type="email"
              v-bind="field"
              placeholder="Email"
              class="form-input"
            />
          </label>
        </Field>

        <ErrorMessage name="email" />
      </div>
      <Field v-slot="{ field }" name="firstName" type="text">
        <label for="firstName">
          <input type="text" v-bind="field" placeholder="First Name" />
        </label>
      </Field>

      <ErrorMessage name="firstName" />

      <Field v-slot="{ field }" name="lastName" type="text">
        <label for="lastName">
          <input type="text" v-bind="field" placeholder="Last Name" />
        </label>
      </Field>

      <ErrorMessage name="lastName" />

      <Field v-slot="{ field }" name="password" type="text">
        <label for="password">
          <input type="password" v-bind="field" placeholder="Password" />
        </label>
      </Field>

      <ErrorMessage name="password" />

      <Field v-slot="{ field }" name="confirmPassword" type="text">
        <label for="confirmPassword">
          <input
            type="password"
            v-bind="field"
            placeholder="Confirm Password"
          />
        </label>
      </Field>
      <ErrorMessage name="confirmPassword" />

      <Field
        v-slot="{ field }"
        name="acceptTerms"
        type="checkbox"
        :value="false"
      >
        <label for="acceptTerms">
          <input type="checkbox" v-bind="field" />
          I agree
        </label>
      </Field>

      <ErrorMessage name="acceptTerms" />
      <button class="form-button">Submit</button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import signUpSchema from '../../lib/validators/signUpSchema';

function handleSubmit(values: any) {
  alert(JSON.stringify(values, null, 2));
}
</script>
