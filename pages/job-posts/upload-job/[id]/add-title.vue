<template>
  <div>
    <h1>Step 1: Add Title</h1>
    <p>Now lets add some details about the job post.</p>
    <p v-if="formHandler.pending">Pending</p>
    <Form
      class="primary-form-container"
      :validation-schema="addTitleSchema"
      @submit="updateJobTitle"
    >
      <p>Add title</p>

      <div class="primary-form-input-content-container">
        <p class="primary-form-input-label-text">Add Title</p>
        <Field
          v-slot="{ field }"
          class="primary-form-input-container"
          name="title"
          type="text"
        >
          <label for="title" class="primary-form-input-label-container">
            <input
              type="text"
              v-bind="field"
              placeholder="Title"
              class="primary-form-input"
            />
          </label>
        </Field>

        <ErrorMessage
          name="title"
          class="primary-form-input-validation-error-message-text"
        />
      </div>
      <button type="submit">Next</button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import addTitleSchema from '../../../../lib/validators/jobPosts/addTitleSchema';
import FormHandler from '@/lib/types/FormHandler';

const formHandler = ref<FormHandler>({
  pending: false,
  errorMessage: undefined,
});

const router = useRouter();

const route = useRoute();

async function updateJobTitle(values: any) {
  const { pending, error } = await useFetch(
    `/api/job-posts/${route.params.id}/add-fields/add-title`,
    {
      method: 'PUT',
      body: values,
    },
  );

  await router.push(`/job-posts/upload-job/${route.params.id}/add-location`);

  if (pending.value) {
    formHandler.value.pending = pending.value;
  }

  if (error.value) {
    formHandler.value.errorMessage = error.value.statusMessage;
  }
}

useHead({
  title: 'Upload Job - Add Title',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
models/types/FormHandler ../../../../models/validators/jobPosts/addTitleSchema
../../../../utils/validators/jobPosts/addTitleSchema
