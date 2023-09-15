<template>
  <div>
    <h1>Step 3: Add Contract Details</h1>
    <p>Now let's add contract details about the job post.</p>
    <p v-if="formHandler.pending">Pending</p>
    <Form
      class="primary-form-container"
      :validation-schema="addContractSchema"
      @submit="addJobContractDetails"
    >
      <p>Add contract type</p>

      <div class="primary-form-input-content-container">
        <p class="primary-form-input-label-text">Contract Type</p>
        <Field
          v-slot="{ field }"
          class="primary-form-input-container"
          name="contractType"
        >
          <label for="contractType" class="primary-form-input-label-container">
            <select v-bind="field" class="primary-form-input">
              <option
                v-for="contractTypeOption in contractTypeOptions"
                :key="contractTypeOption.value"
                :value="contractTypeOption.value"
              >
                {{ contractTypeOption.name }}
              </option>
            </select>
          </label>
        </Field>

        <ErrorMessage
          name="contractType"
          class="primary-form-input-validation-error-message-text"
        />
      </div>
      <div class="primary-form-input-content-container">
        <p class="primary-form-input-label-text">Contract Level</p>
        <Field
          v-slot="{ field }"
          class="primary-form-input-container"
          name="seniorLevel"
        >
          <label for="seniorLevel" class="primary-form-input-label-container">
            <select v-bind="field" class="primary-form-input">
              <option
                v-for="contractLevelOption in contractLevelOptions"
                :key="contractLevelOption.value"
                :value="contractLevelOption.value"
              >
                {{ contractLevelOption.name }}
              </option>
            </select>
          </label>
        </Field>

        <ErrorMessage
          name="seniorLevel"
          class="primary-form-input-validation-error-message-text"
        />
      </div>

      <div class="primary-form-input-content-container">
        <p class="primary-form-input-label-text">Salary</p>

        <div class="primary-form-input-content-container">
          <p class="primary-form-input-label-text">Add Min</p>
          <Field
            v-slot="{ field }"
            class="primary-form-input-container"
            name="salary.min"
            type="number"
          >
            <label for="salary.min" class="primary-form-input-label-container">
              <input
                type="number"
                v-bind="field"
                placeholder="Min Salary"
                class="primary-form-input"
              />
            </label>
          </Field>

          <ErrorMessage
            name="salary.min"
            class="primary-form-input-validation-error-message-text"
          />
        </div>

        <div class="primary-form-input-content-container">
          <p class="primary-form-input-label-text">Add Max</p>
          <Field
            v-slot="{ field }"
            class="primary-form-input-container"
            name="salary.max"
            type="number"
          >
            <label for="salary.max" class="primary-form-input-label-container">
              <input
                type="number"
                v-bind="field"
                placeholder="Max Salary"
                class="primary-form-input"
              />
            </label>
          </Field>

          <ErrorMessage
            name="salary.max"
            class="primary-form-input-validation-error-message-text"
          />
        </div>

        <Field
          v-slot="{ field }"
          class="primary-form-input-container"
          name="salary.rate"
        >
          <p class="primary-form-input-label-text">Add Rate</p>
          <label for="salary.rate" class="primary-form-input-label-container">
            <select v-bind="field" class="primary-form-input">
              <option
                v-for="rateOption in rateOptions"
                :key="rateOption.value"
                :value="rateOption.value"
              >
                {{ rateOption.name }}
              </option>
            </select>
          </label>
        </Field>

        <ErrorMessage
          name="salary.rate"
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
import addContractSchema from 'models/jobPost/validators/addContractSchema';

const formHandler = ref<FormHandler>({
  pending: false,
  errorMessage: undefined,
});

const router = useRouter();

const route = useRoute();

async function addJobContractDetails(values: any) {
  const { pending, error } = await useFetch(
    `/api/job-posts/${route.params.id}/add-fields/add-contract`,
    {
      method: 'PUT',
      body: values,
    },
  );

  await router.push(`/upload-job/${route.params.id}/add-deadline-date`);

  if (pending.value) {
    formHandler.value.pending = pending.value;
  }

  if (error.value) {
    formHandler.value.errorMessage = error.value.statusMessage;
  }
}
const contractTypeOptions = [
  {
    name: 'Full-time',
    value: 'full-time',
  },
  {
    name: 'Part-time',
    value: 'part-time',
  },
  {
    name: 'Contract',
    value: 'contract',
  },
];

const contractLevelOptions = [
  {
    name: 'Junior',
    value: 'junior',
  },
  {
    name: 'Mid',
    value: 'mid',
  },
  {
    name: 'Senior',
    value: 'senior',
  },
];

const rateOptions = [
  {
    name: 'Monthly',
    value: 'monthly',
  },
  {
    name: 'Hourly',
    value: 'hourly',
  },
  {
    name: 'Daily',
    value: 'daily',
  },
  {
    name: 'Weekly',
    value: 'weekly',
  },
  {
    name: 'Annually',
    value: 'annually',
  },
];

definePageMeta({
  middleware: ['unauthenticated'],
});

useHead({
  title: 'Upload Job - Add Contract Details',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
