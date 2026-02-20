import { updateEmail } from './src/js/state/stateManager';

function syncToState() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');

  if (!nameInput || !emailInput || !phoneInput) {
    return;
  }

  updateName(nameInput.value);
  updateEmail(emailInput.value);
  updatePhone(phoneInput.value);
}

function synFromStateToForm() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');

  if (!name || !email || !phone) {
    return; // Not on Step 1
  }

  name.value = state.formData.personalInfo.name;
  email.value = state.formData.personalInfo.email;
  phone.value = state.formData.personalInfo.phone;
}

function validateStep1() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');

  if (!name || !email || !phone) {
    return true; // Not on Step 1, so validation passes
  }

  const nameResult = validateName(name.value); // this returns an object,if not valid returns and object {isInvalid:true, error:message} if valid {isValid:true, error:""}
  const emailResult = validateEmail(email.value);
  const phoneResult = validatePhone(phone.value);
}
