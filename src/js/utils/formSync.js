import { updateName, updateEmail, updatePhone } from '../state/stateManager.js';
import {
  validateEmail,
  validatePhone,
  validateName,
} from '../validation/validation';

export function syncFormDataToState() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');

  if (!nameInput || !emailInput || !phoneInput) {
    return; // Not on Step 1, nothing to sync
  }

  updateName(nameInput.value);
  updateEmail(emailInput.value);
  updatePhone(phoneInput.value);
}

export function validateStep1() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');

  if (!name || !email || !phone) {
    return true; // Not on Step 1, so validation passes
  }

  const nameResult = validateName(name.value);
  const emailResult = validateEmail(email.value);
  const phoneResult = validatePhone(phone.value);

  if (!nameResult.isValid) {
    const errorMsg = nameResult.error;
    showError('name', errorMsg);
  } else {
    clearError('name');
  }

  if (!emailResult.isValid) {
    const errorMsg = emailResult.error;
    showError('email', errorMsg);
  } else {
    clearError('email');
  }

  if (!phoneResult.isValid) {
    const errorMsg = phoneResult.error;
    showError('phone', errorMsg);
  } else {
    clearError('phone');
  }

  return nameResult.isValid && emailResult.isValid && phoneResult.isValid;
}

function showError(fieldName, errorMsg) {
  const errorSpan = document.querySelector(`[data-error="${fieldName}"]`);
  const input = document.getElementById(fieldName);
  input.classList.add('error');
  errorSpan.textContent = errorMsg;
  errorSpan.classList.add('active');
}

function clearError(fieldName) {
  const errorSpan = document.querySelector(`[data-error="${fieldName}"]`);
  const input = document.getElementById(fieldName);

  errorSpan.textContent = '';
  errorSpan.classList.remove('active');
  input.classList.remove('error');
}
