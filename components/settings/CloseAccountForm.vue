<template>
  <div>
    <h1>Close Account</h1>
    <p>
      Please enter "CLOSE" and your password to confirm that you wish to close
      your account.
    </p>
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
      <button type="submit">Close Account</button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import closeAccountSchema from '@/models/settings/validators/closeAccountSchema';

function handleCloseAccount(values: any): void {
  alert(JSON.stringify(values, null, 2));
}
</script>
