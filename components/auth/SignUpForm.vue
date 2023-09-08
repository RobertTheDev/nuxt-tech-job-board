<template>
  <div class="container">
    <h3>Signup</h3>

    <Form class="form" :validation-schema="signUpSchema" @submit="handleSignUp">
      <div class="primary-form-input-content-container">
        <Field
          v-slot="{ field }"
          class="field email-field"
          name="emailAddress"
          type="email"
        >
          <label for="emailAddress" class="input-field">
            <input
              type="email"
              v-bind="field"
              placeholder="Email"
              class="email"
            />
          </label>
        </Field>

        <span class="error email-error">
          <i class="bx bx-error-circle error-icon"></i>
          <p class="error-text">
            Please enter at least 8 character with number, symbol, small and
            capital letter.
          </p>
        </span>

        <!-- <span class="error email-error">
          <i class="bx bx-error-circle error-icon"></i>

          <ErrorMessage name="emailAddress" class="error-text" />

        </span> -->
      </div>

      <!-- <div class="field create-password">
        <div class="input-field">
          <input
            type="password"
            placeholder="Create Password"
            class="password"
          />
          <i class="bx bx-hide password-hide"></i>
        </div>
        <span class="error password-error">
          <i class="bx bx-error-circle error-icon"></i>
          <p class="error-text">
            Please enter at least 8 character with number, symbol, small and
            capital letter.
          </p>
        </span>
      </div> -->
      <!-- <div class="field confirm-password">
        <div class="input-field">
          <input
            type="password"
            placeholder="Confirm password"
            class="confirpassword"
          />
          <i class="bx bx-hide password-hide"></i>
        </div>
        <span class="error confirm-error">
          <i class="bx bx-error-circle error-icon"></i>
          <p class="error-text">Password don't match.</p>
        </span>
      </div> -->
      <div class="field button-field input-field">
        <input type="submit" value="Submit Now" />
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
import { Form, Field } from 'vee-validate';
import signUpSchema from '@/models/auth/validators/signUpSchema';
// import signUpValidatorRules from '@/utils/constants/signUpValidatorRules';

const router = useRouter();

// function navigate(href: string) {
//   router.push(href);
// }

// const passwordVisible = ref<boolean>(false);
const form = reactive({
  loading: false,
  error: false,
});

async function handleSignUp(values: any) {
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

// function togglePasswordVisibility() {
//   passwordVisible.value = !passwordVisible.value;
// }
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  max-width: 370px;
  padding: 25px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}
.container h3 {
  font-size: 22px;
  font-weight: 600;
  color: #333;
}
.container form {
  margin-top: 30px;
}
.form .field {
  margin-bottom: 20px;
}
.form .input-field {
  position: relative;
  width: 100%;
  height: 55px;
}
.input-field input {
  width: 100%;
  height: 100%;
  padding: 0 15px;
  border: 1px solid #d1d1d1;
  border-radius: 8px;
  outline: none;
}
.invalid input {
  border: 1px solid #d93025;
}
.input-field .password-hide {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  font-size: 18px;
  color: #919191;
  padding: 3px;
  cursor: pointer;
}
.field .error {
  display: flex;
  align-items: center;
  margin-top: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #d93025;
  display: none;
}

.error-text {
  display: flex;
  align-items: center;
  margin-top: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #d93025;
}
.invalid .error {
  display: flex;
}
.error .error-icon {
  font-size: 15px;
  margin-right: 6px;
}
.create-password .error {
  align-items: flex-start;
}
.create-password .error-icon {
  margin-top: 4px;
}
.button-field {
  margin: 25px 0 6px;
}
.button-field input {
  font-size: 16px;
  font-weight: 400;
  background-color: #4070f4;
  color: #fff;
  transition: all 0.3s;
  cursor: pointer;
}
.button-field input:hover {
  background-color: #0e4bf1;
}
</style>
