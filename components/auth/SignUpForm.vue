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

        <span>
          <p>
            Please enter at least 8 character with number, symbol, small and
            capital letter.
          </p>
        </span>
      </div>

      <div>
        <input type="submit" value="Submit Now" />
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
