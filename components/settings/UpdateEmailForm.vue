<template>
  <Form :validation-schema="changeEmailSchema" @submit="handleChangeEmail">
    <div>
      <p>Email</p>
      <Field v-slot="{ field }" name="newEmailAddress" type="email">
        <label for="newEmailAddress">
          <input type="email" v-bind="field" placeholder="Email" />
        </label>
      </Field>

      <ErrorMessage name="newEmailAddress" />
    </div>

    <div>
      <p>Password</p>

      <Field v-slot="{ field }" name="password" type="password">
        <div>
          <label for="password">
            <input
              :type="passwordVisible ? 'text' : 'password'"
              v-bind="field"
              placeholder="Password"
            />
          </label>
          <button @click.prevent="togglePasswordVisibility">
            {{ passwordVisible ? 'Hide' : 'Show' }}
          </button>
        </div>
      </Field>

      <ErrorMessage name="password" />
    </div>
    <p v-if="formHandler.errorMessage">
      {{ formHandler.errorMessage }}
    </p>
    <p v-if="formHandler.successMessage">
      {{ formHandler.successMessage }}
    </p>
    <button v-if="formHandler.pending">Loading</button>

    <button v-else type="submit">Change Email Address</button>
  </Form>
</template>

<script lang="ts" setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import changeEmailSchema from '@/models/settings/validators/changeEmailSchema';

const passwordVisible = ref<boolean>(false);

function togglePasswordVisibility(): void {
  passwordVisible.value = !passwordVisible.value;
}

const formHandler = ref<{
  pending: boolean;
  errorMessage: string | undefined;
  successMessage: string | undefined;
}>({
  pending: false,
  errorMessage: undefined,
  successMessage: undefined,
});

async function handleChangeEmail(values: any): Promise<void> {
  const { pending, error } = await useFetch(`/api/settings/change-email`, {
    method: 'PUT',
    body: values,
  });

  if (pending.value) {
    formHandler.value.pending = pending.value;
  } else if (error.value) {
    formHandler.value.errorMessage = error.value.statusMessage;
  } else {
    formHandler.value.successMessage =
      'Successfully updated your email address.';
  }
}
</script>
