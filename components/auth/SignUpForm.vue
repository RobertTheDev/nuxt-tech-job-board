<template>
  <div>
    <h3>Signup</h3>

    <Form :validation-schema="signUpSchema" @submit="handleSignUp">
      <div>
        <Field v-slot="{ field }" name="emailAddress" type="email">
          <label for="emailAddress">
            <input type="email" v-bind="field" placeholder="Email" />
          </label>
        </Field>
      </div>

      <div>
        <Field v-slot="{ field }" name="password" type="password">
          <label for="password">
            <input type="password" v-bind="field" placeholder="Password" />
          </label>
        </Field>
      </div>

      <div>
        <Field v-slot="{ field }" name="firstName" type="text">
          <label for="firstName">
            <input type="firstName" v-bind="field" placeholder="First Name" />
          </label>
        </Field>
      </div>

      <div>
        <Field v-slot="{ field }" name="lastName" type="text">
          <label for="lastName">
            <input type="lastName" v-bind="field" placeholder="Last Name" />
          </label>
        </Field>
      </div>

      <div>
        <button type="submit">Sign Up</button>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form, Field } from 'vee-validate';
import signUpSchema from '@/models/auth/validators/signUpSchema';

const router = useRouter();

const form = reactive({
  loading: false,
  error: false,
});

async function handleSignUp(values: any): Promise<void> {
  form.loading = true;
  await useFetch('/api/auth/sign-up', {
    method: 'POST',
    body: values,
  })
    .then(() => {
      form.loading = false;
      router.push('/');
    })
    .catch((err) => {
      if (err) {
        form.error = true;
        form.loading = false;
      }
    });
}
</script>
