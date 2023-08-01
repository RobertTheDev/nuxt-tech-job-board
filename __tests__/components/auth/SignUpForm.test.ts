import { it, expect, describe } from 'vitest';
import { mount } from '@vue/test-utils';
import SignUpForm from '../../../components/auth/SignUpForm.vue';

describe('SignUpForm', () => {
  const wrapper = mount(SignUpForm);
  const loginLink = wrapper.find('#sign-up-form-login-link');
  const signUpButton = wrapper.find('#sign-up-button');
  const passwordInput = wrapper.find('input[type="password"]');
  const togglePasswordVisibilityButton = wrapper.find(
    '#sign-up-form-reveal-button',
  );
  // TEST - Text the component exists.
  it('The sign up form component should be a valid vue component', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('Should have a login up button.', () => {
    expect(loginLink.exists()).toBe(true);
    expect(loginLink.text()).toBe('Login');
  });

  // TEST - Text the form has a submit button with the appropriate text.
  it('Should have a sign up button.', () => {
    expect(signUpButton.exists()).toBe(true);
    expect(signUpButton.text()).toBe('Sign Up');
  });
  // TEST - Text the form has the relevant inputs required to submit data.
  it.each([
    'emailAddress',
    'password',
    'firstName',
    'lastName',
    // Add more input names if needed
  ])('should have an input with the name "%s"', (inputName) => {
    // Find the input element with the specified name
    const input = wrapper.find(`input[name="${inputName}"]`);

    // Assert that the input element exists
    expect(input.exists()).toBe(true);

    // placeholder, label, accessibilirty
  });
  it('should toggle password visibility', async () => {
    // Get the initial type of the password input

    const initialType = passwordInput.attributes('type');

    // Simulate a button click to toggle password visibility

    expect(passwordInput.exists()).toBe(true);
    expect(togglePasswordVisibilityButton.exists()).toBe(true);

    await togglePasswordVisibilityButton.trigger('click');

    // // Get the type of the password input after the click

    const updatedType = passwordInput.attributes('type');

    // // Assert that the type attribute toggles between "password" and "text"
    expect(initialType).toBe('password');
    expect(updatedType).toBe('text');
  });
});
