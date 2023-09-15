<template>
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

    <button v-if="formHandler.pending" type="submit">Next</button>
    <button v-else type="submit">Next</button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import FormHandler from '@/models/config/form/FormHandler';
import addContractSchema from '@/models/jobPost/validators/addContractSchema';
import rateOptions from '@/utils/inputOptions/rateOptions';
import contractLevelOptions from '@/utils/inputOptions/contractLevelOptions';
import contractTypeOptions from '@/utils/inputOptions/contractTypeOptions';

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
</script>
