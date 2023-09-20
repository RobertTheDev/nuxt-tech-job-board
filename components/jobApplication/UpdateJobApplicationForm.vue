<template>
  <Form
    :validation-schema="updateJobApplicationSchema"
    @submit="handleUpdateJobApplication"
  >
    <Field v-slot="{ field }" name="cv" type="text">
      <label for="cv">
        <input type="text" v-bind="field" placeholder="cv" />
      </label>
    </Field>
    <ErrorMessage name="cv" />

    <Field v-slot="{ field }" name="message" type="text">
      <label for="message">
        <input type="text" v-bind="field" placeholder="message" />
      </label>
    </Field>
    <ErrorMessage name="message" />

    <p v-if="formHandler.errorMessage">
      {{ formHandler.errorMessage }}
    </p>
    <p v-if="formHandler.successMessage">
      {{ formHandler.successMessage }}
    </p>
    <button v-if="formHandler.pending">Loading</button>
    <button v-else type="submit">Update Job Application</button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import updateJobApplicationSchema from '@/models/jobApplication/validators/updateJobApplicationSchema';

const route = useRoute();

const { id } = route.params;

const formHandler = ref<{
  pending: boolean;
  errorMessage: string | undefined;
  successMessage: string | undefined;
}>({
  pending: false,
  errorMessage: undefined,
  successMessage: undefined,
});

async function handleUpdateJobApplication(values: any): Promise<void> {
  const { pending, error } = await useFetch(`/api/job-applications/${id}`, {
    method: 'POST',
    body: values,
  });

  if (pending.value) {
    formHandler.value.pending = pending.value;
  } else if (error.value) {
    formHandler.value.errorMessage = error.value.statusMessage;
  } else {
    formHandler.value.successMessage = 'Successfully updated job application.';
  }
}
</script>
