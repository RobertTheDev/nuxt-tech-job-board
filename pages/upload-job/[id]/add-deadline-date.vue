<template>
  <div>
    <h1>Step 5: Add Deadline Date</h1>
    <p>Now lets add some details about the job post.</p>
    <p v-if="formHandler.pending">Pending</p>
    <Form
      class="primary-form-container"
      :validation-schema="addDeadlineDateSchema"
      @submit="updateJobTitle"
    >
      <div class="primary-form-input-content-container">
        <p class="primary-form-input-label-text">Add Deadline Date</p>
        <Field
          v-slot="{ field }"
          class="primary-form-input-container"
          name="deadlineDate"
          type="datetime-local"
        >
          <label for="deadlineDate" class="primary-form-input-label-container">
            <input
              type="datetime-local"
              v-bind="field"
              placeholder="Title"
              class="primary-form-input"
              name="deadlineDate"
            />
          </label>
        </Field>

        <ErrorMessage
          name="deadlineDate"
          class="primary-form-input-validation-error-message-text"
        />
      </div>
      <button type="submit">Next</button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import FormHandler from 'models/config/form/FormHandler';
import addDeadlineDateSchema from 'models/jobPost/validators/addDeadlineDateSchema';

const formHandler = ref<FormHandler>({
  pending: false,
  errorMessage: undefined,
});

const router = useRouter();

const route = useRoute();

async function updateJobTitle(values: any) {
  const { pending, error } = await useFetch(
    `/api/job-posts/${route.params.id}/add-fields/add-deadline-date`,
    {
      method: 'PUT',
      body: values,
    },
  );

  await router.push(`/upload-job/${route.params.id}/add-description`);

  if (pending.value) {
    formHandler.value.pending = pending.value;
  }

  if (error.value) {
    formHandler.value.errorMessage = error.value.statusMessage;
  }
}

definePageMeta({
  middleware: ['unauthenticated'],
});

useHead({
  title: 'Upload Job - Add Deadline Date',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
