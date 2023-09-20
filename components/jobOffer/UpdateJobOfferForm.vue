<template>
  <Form
    :validation-schema="updateJobOfferSchema"
    @submit="handleUpdateJobOffer"
  >
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
    <button v-else type="submit">Update Job Offer</button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import updateJobOfferSchema from '@/models/jobOffer/validators/updateJobOfferSchema';

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

async function handleUpdateJobOffer(values: any): Promise<void> {
  const { pending, error } = await useFetch(`/api/job-offers/${id}`, {
    method: 'PUT',
    body: values,
  });

  if (pending.value) {
    formHandler.value.pending = pending.value;
  } else if (error.value) {
    formHandler.value.errorMessage = error.value.statusMessage;
  } else {
    formHandler.value.successMessage = 'Successfully updated job offer.';
  }
}
</script>
