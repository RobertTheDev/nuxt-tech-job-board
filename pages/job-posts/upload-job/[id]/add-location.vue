<template>
  <div>
    <h1>Step 2: Add Location</h1>
    <p>Now let's add location information about the job post.</p>
    <p v-if="formHandler.pending">Pending</p>

    <Form
      class="primary-form-container"
      :validation-schema="addLocationSchema"
      @submit="updateJobLocation"
    >
      <p>Add location</p>

      <div class="primary-form-input-content-container">
        <p class="primary-form-input-label-text">Location Type</p>
        <Field
          v-slot="{ field }"
          v-model="locationType"
          class="primary-form-input-container"
          name="locationType"
        >
          <label for="locationType" class="primary-form-input-label-container">
            <select v-bind="field" class="primary-form-input">
              <option
                v-for="locationTypeOption in locationTypeOptions"
                :key="locationTypeOption.value"
                :value="locationTypeOption.value"
              >
                {{ locationTypeOption.name }}
              </option>
            </select>
          </label>
        </Field>

        <ErrorMessage
          name="locationType"
          class="primary-form-input-validation-error-message-text"
        />

        <div v-if="locationType && locationType !== 'remote'">
          <div class="primary-form-input-content-container">
            <p class="primary-form-input-label-text">Add Address 1</p>
            <Field
              v-slot="{ field }"
              class="primary-form-input-container"
              name="location.address1"
              type="text"
            >
              <label
                for="location.address1"
                class="primary-form-input-label-container"
              >
                <input
                  type="text"
                  v-bind="field"
                  placeholder="Address 1"
                  class="primary-form-input"
                />
              </label>
            </Field>

            <ErrorMessage
              name="location.address1"
              class="primary-form-input-validation-error-message-text"
            />
          </div>

          <div class="primary-form-input-content-container">
            <p class="primary-form-input-label-text">Add Address 2</p>
            <Field
              v-slot="{ field }"
              class="primary-form-input-container"
              name="location.address2"
              type="text"
            >
              <label
                for="location.address2"
                class="primary-form-input-label-container"
              >
                <input
                  type="text"
                  v-bind="field"
                  placeholder="Address 2"
                  class="primary-form-input"
                />
              </label>
            </Field>

            <ErrorMessage
              name="location.address2"
              class="primary-form-input-validation-error-message-text"
            />
          </div>

          <div class="primary-form-input-content-container">
            <p class="primary-form-input-label-text">Add Town or City</p>
            <Field
              v-slot="{ field }"
              class="primary-form-input-container"
              name="location.townOrCity"
              type="text"
            >
              <label
                for="location.townOrCity"
                class="primary-form-input-label-container"
              >
                <input
                  type="text"
                  v-bind="field"
                  placeholder="Town or city"
                  class="primary-form-input"
                />
              </label>
            </Field>

            <ErrorMessage
              name="location.townOrCity"
              class="primary-form-input-validation-error-message-text"
            />
          </div>

          <div class="primary-form-input-content-container">
            <p class="primary-form-input-label-text">Add County</p>
            <Field
              v-slot="{ field }"
              class="primary-form-input-container"
              name="location.county"
              type="text"
            >
              <label
                for="location.county"
                class="primary-form-input-label-container"
              >
                <input
                  type="text"
                  v-bind="field"
                  placeholder="County"
                  class="primary-form-input"
                />
              </label>
            </Field>

            <ErrorMessage
              name="location.county"
              class="primary-form-input-validation-error-message-text"
            />
          </div>

          <div class="primary-form-input-content-container">
            <p class="primary-form-input-label-text">Add Post Code</p>
            <Field
              v-slot="{ field }"
              class="primary-form-input-container"
              name="location.postCode"
              type="text"
            >
              <label
                for="location.postCode"
                class="primary-form-input-label-container"
              >
                <input
                  type="text"
                  v-bind="field"
                  placeholder="Post Code"
                  class="primary-form-input"
                />
              </label>
            </Field>

            <ErrorMessage
              name="location.postCode"
              class="primary-form-input-validation-error-message-text"
            />
          </div>

          <div class="primary-form-input-content-container">
            <p class="primary-form-input-label-text">Add Country</p>
            <Field
              v-slot="{ field }"
              class="primary-form-input-container"
              name="location.country"
              type="text"
            >
              <label
                for="location.country"
                class="primary-form-input-label-container"
              >
                <input
                  type="text"
                  v-bind="field"
                  placeholder="Country"
                  class="primary-form-input"
                />
              </label>
            </Field>

            <ErrorMessage
              name="location.country"
              class="primary-form-input-validation-error-message-text"
            />
          </div>
        </div>
      </div>
      <button type="submit">Next</button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import addLocationSchema from 'models/jobPost/validators/addLocationSchema';
import FormHandler from 'models/config/form/FormHandler';

const formHandler = ref<FormHandler>({
  pending: false,
  errorMessage: undefined,
});

const router = useRouter();

const locationType = ref('');

const route = useRoute();

const locationTypeOptions = [
  {
    name: 'Remote',
    value: 'remote',
  },
  {
    name: 'Hybrid',
    value: 'hybrid',
  },
  {
    name: 'On-Premise',
    value: 'on-premise',
  },
];

async function updateJobLocation(values: any) {
  const { pending, error } = await useFetch(
    `/api/job-posts/${route.params.id}/add-fields/add-location`,
    {
      method: 'PUT',
      body: values,
    },
  );

  await router.push(
    `/job-posts/upload-job/${route.params.id}/add-contract-details`,
  );

  if (pending.value) {
    formHandler.value.pending = pending.value;
  }

  if (error.value) {
    formHandler.value.errorMessage = error.value.statusMessage;
  }
}

useHead({
  title: 'Upload Job - Add Location',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
