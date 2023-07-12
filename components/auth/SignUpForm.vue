<template>
  <form>
    <label for="email_address">
      <input
        id="email_address"
        v-model="signUp.emailAddress"
        name="email_address"
        type="email"
        placeholder="Enter email address"
      />
    </label>
    <label for="first_name">
      <input
        id="first_name"
        v-model="signUp.firstName"
        name="first_name"
        type="text"
        placeholder="Enter first name"
      />
    </label>
    <label for="last_name">
      <input
        id="last_name"
        v-model="signUp.lastName"
        name="last_name"
        type="text"
        placeholder="Enter last name"
      />
    </label>
    <label for="password">
      <input
        id="password"
        v-model="signUp.password"
        name="password"
        type="password"
        placeholder="Enter password"
      />
    </label>
    <label for="confirm_password">
      <input
        id="confirm_password"
        v-model="signUp.confirmPassword"
        name="confirm_password"
        type="password"
        placeholder="Confirm password"
      />
    </label>
    <button type="submit">Sign Up</button>
  </form>
</template>

<script setup>
const signUp = ref({
  emailAddress: '',
  firstName: '',
  lastName: '',
  password: '',
  confirmPassword: '',
});
</script>
