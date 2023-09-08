<!-- <template>
  <Form
    class="primary-form-container"
    :validation-schema="loginSchema"
    @submit="handleLogin"
  >
    <div class="primary-form-header-container">
 
      <p class="primary-form-header-text">
        Don't have an account?
        <button
          class="primary-form-header-link"
          @click="navigate('/auth/sign-up')"
        >
          Sign up.
        </button>
      </p>
    </div>
    <div class="primary-form-input-content-container">
      <p class="primary-form-input-label-text">Email</p>
      <Field
        v-slot="{ field }"
        class="primary-form-input-container"
        name="emailAddress"
        type="email"
      >
        <label for="emailAddress" class="primary-form-input-label-container">
          <input
            type="email"
            v-bind="field"
            placeholder="Email"
            class="primary-form-input"
          />
        </label>
      </Field>

      <ErrorMessage
        name="emailAddress"
        class="primary-form-input-validation-error-message-text"
      />
    </div>

    <div class="primary-form-input-content-container">
      <p class="primary-form-input-label-text">Password</p>

      <Field
        v-slot="{ field }"
        class="primary-form-input-container"
        name="password"
        type="text"
      >
        <div class="primary-form-input-container">
          <label for="password" class="primary-form-input-label-container">
            <input
              class="primary-form-input"
              :type="passwordVisible ? 'text' : 'password'"
              v-bind="field"
              placeholder="Password"
            />
          </label>
          <button
            id="sign-up-form-reveal-button"
            type="button"
            class="reveal-button"
            @click.prevent="togglePasswordVisibility"
          >
            {{ passwordVisible ? 'Hide' : 'Show' }}
          </button>
        </div>
      </Field>

      <NuxtLink
        class="primary-form-link"
        @click="navigate('/auth/forgot-password')"
        >Forgot password?</NuxtLink
      >

      <ErrorMessage
        class="primary-form-input-validation-error-message-text"
        name="password"
      />
    </div>

    <p
      v-if="formHandler.errorMessage"
      class="primary-form-input-validation-error-message-text"
    >
      {{ formHandler.errorMessage }}
    </p>
    <div class="primary-form-footer-container">
  
      <button
        v-if="formHandler.pending"
        class="primary-form-button"
        type="submit"
      >
        Loading
      </button>
      <button v-else class="primary-form-button" type="submit">Login</button>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import loginSchema from '@/models/auth/validators/loginSchema';
import FormHandler from '@/models/config/form/FormHandler';

const router = useRouter();

function navigate(href: string) {
  router.push(href);
}

const passwordVisible = ref<boolean>(false);

function togglePasswordVisibility() {
  passwordVisible.value = !passwordVisible.value;
}

const formHandler = ref<FormHandler>({
  pending: false,
  errorMessage: undefined,
});

async function handleLogin(values: any) {
  const { pending, error } = await useFetch('/api/auth/login', {
    method: 'POST',
    body: values,
  });

  if (pending.value) {
    formHandler.value.pending = pending.value;
  } else if (error.value) {
    formHandler.value.errorMessage = error.value.statusMessage;
  } else {
    window.location.reload();
  }
}
</script>
 -->

<template>
  <div class="formbg-outer">
    <div class="formbg">
      <div class="formbg-inner padding-horizontal--48">
        <span class="padding-bottom--15">Sign in to your account</span>
        <form id="stripe-login">
          <div class="field padding-bottom--24">
            <label for="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div class="field padding-bottom--24">
            <div class="grid--50-50">
              <label for="password">Password</label>
              <div class="reset-pass">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
            <input type="password" name="password" />
          </div>
          <div
            class="field field-checkbox padding-bottom--24 flex-flex align-center"
          >
            <label for="checkbox">
              <input type="checkbox" name="checkbox" />Show password
            </label>
          </div>
          <div class="field padding-bottom--24">
            <input type="submit" name="submit" value="Continue" />
          </div>
          <div class="field footer-link">
            <span>Don't have an account? <a href="">Sign up</a></span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<!-- class="listing padding-top--24 padding-bottom--24 flex-flex center-center" -->

<script setup></script>

<style lang="scss" scoped>
.flex-flex {
  display: flex;
}
.align-center {
  align-items: center;
}
.formbg {
  margin: 0px auto;
  width: 100%;
  max-width: 448px;
  background: white;
  border-radius: 4px;
  box-shadow:
    rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,
    rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
}
span {
  display: block;
  font-size: 20px;
  line-height: 28px;
  color: #1a1f36;
}
label {
  margin-bottom: 10px;
}
.reset-pass a,
label {
  font-size: 14px;
  font-weight: 600;
  display: block;
}
.reset-pass > a {
  text-align: right;
  margin-bottom: 10px;
}
.grid--50-50 {
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
}

.field input {
  font-size: 16px;
  line-height: 28px;
  padding: 8px 16px;
  width: 100%;
  min-height: 44px;
  border: unset;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
  background-color: rgb(255, 255, 255);
  box-shadow:
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

input[type='submit'] {
  background-color: rgb(84, 105, 212);
  box-shadow:
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 1px 0px,
    rgb(84, 105, 212) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}
.field-checkbox input {
  width: 20px;
  height: 15px;
  margin-right: 5px;
  box-shadow: unset;
  min-height: unset;
}
.field-checkbox label {
  display: flex;
  align-items: center;
  margin: 0;
}

.footer-link span {
  font-size: 14px;
  text-align: center;
}
</style>
