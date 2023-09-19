<template>
  <Form
    class="primary-form-container"
    :validation-schema="addDescriptionSchema"
    @submit="updateJobTitle"
  >
    <p>Add description</p>

    <div class="primary-form-input-content-container">
      <p class="primary-form-input-label-text">Add Description</p>
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
    <p v-if="formHandler.pending">Pending</p>
    <button type="submit">Next</button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import FormHandler from '@/models/config/form/FormHandler';
import addDescriptionSchema from '@/models/jobPost/validators/jobPostFieldSchemas/addDescriptionSchema';

const formHandler = ref<FormHandler>({
  pending: false,
  errorMessage: undefined,
});

const router = useRouter();

const route = useRoute();

async function updateJobTitle(values: any) {
  const { pending, error } = await useFetch(
    `/api/job-posts/${route.params.id}/add-fields/add-description`,
    {
      method: 'PUT',
      body: values,
    },
  );

  await router.push(`/upload-job/${route.params.id}/submit-job-post`);

  if (pending.value) {
    formHandler.value.pending = pending.value;
  }

  if (error.value) {
    formHandler.value.errorMessage = error.value.statusMessage;
  }
}
</script>
