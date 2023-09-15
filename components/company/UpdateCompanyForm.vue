<template>
  <Form
    :validation-schema="updateCompanySchema"
    :initial-values="company"
    @submit="handleUpdateCompany"
  >
    <!-- NAME -->
    <Field v-slot="{ field }" name="name" type="text">
      <label for="name">
        <p>Company Name</p>

        <input
          id="name"
          :placeholder="company.name"
          type="text"
          v-bind="field"
        />
      </label>
    </Field>
    <ErrorMessage name="name" />

    <!-- DESCRIPTION -->
    <Field v-slot="{ field }" name="description" type="text">
      <label for="description">
        <p>Company Description</p>
        <input
          id="description"
          type="text"
          v-bind="field"
          :placeholder="company.description"
        />
      </label>
    </Field>
    <ErrorMessage name="description" />

    <!-- Logo -->

    <Field v-slot="{ field }" name="logo.url" type="text">
      <label for="logo.url">
        <p>Company Logo</p>
        <input
          id="logo.url"
          :placeholder="company.logo.url"
          type="text"
          v-bind="field"
        />
      </label>
    </Field>
    <ErrorMessage name="logo.url" />

    <!-- Cover Image -->

    <Field v-slot="{ field }" name="coverImage.url" type="text">
      <label for="coverImage.url">
        <p>Company Cover Image</p>
        <input
          id="coverImage.url"
          :placeholder="company.coverImage?.url"
          type="text"
          v-bind="field"
        />
      </label>
    </Field>
    <ErrorMessage name="coverImage.url" />

    <!-- Category -->

    <Field v-slot="{ field }" name="category" type="text">
      <label for="category">
        <p>Company Category</p>
        <input id="category" type="text" v-bind="field" />
      </label>
    </Field>
    <ErrorMessage name="category" />

    <!-- Employees -->

    <Field v-slot="{ field }" name="totalEmployees" type="text">
      <label for="totalEmployees">
        <p>Company Employees</p>
        <input id="totalEmployees" type="text" v-bind="field" />
      </label>
    </Field>
    <ErrorMessage name="totalEmployees" />

    <button type="submit">Update Company</button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import Company from '@/models/company/types/Company';
import updateCompanySchema from '@/models/company/validators/updateCompanySchema';
import FormHandler from '@/models/config/form/FormHandler';

const company = defineProps<Company>();

const router = useRouter();
const route = useRoute();

const formHandler = ref<FormHandler>({
  pending: false,
  errorMessage: undefined,
});

async function handleUpdateCompany(values: any): Promise<void> {
  const { pending, error, data } = await useFetch(
    `/api/companies/${route.params.id}`,
    {
      method: 'PUT',
      body: values,
    },
  );

  if (pending.value) {
    formHandler.value.pending = pending.value;
  }

  if (error.value) {
    formHandler.value.errorMessage = error.value.statusMessage;
  }

  if (data) {
    router.push('/profile/my-companies');
  }
}
</script>
