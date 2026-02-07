import { appState } from "./appState.js";

// ===========================================
// Navigation Functions
// ===========================================

export function nextStep() {
  if (appState.currentStep < 5) {
    appState.currentStep++;
  }
}

export function previousStep() {
  if (appState.currentStep > 1) {
    appState.currentStep--;
  }
}

export function goToStep(stepNumber) {
  if (stepNumber >= 1 && stepNumber <= 5) {
    appState.currentStep = stepNumber;
  }
}

// ===========================================
// Personal Info Functions (Step 1)
// ===========================================

export function updateName(name) {
  appState.formData.personalInfo.name = name;
}

export function updateEmail(email) {
  appState.formData.personalInfo.email = email;
}

export function updatePhone(phone) {
  appState.formData.personalInfo.phone = phone;
}

// ===========================================
// Plan Functions (Step 2)
// ===========================================

export function updatePlan(planName) {
  appState.formData.planInfo.plan = planName;
}

export function updateBilling(billingType) {
  appState.formData.planInfo.billing = billingType;
}

// ===========================================
// Add-ons Functions (Step 3)
// ===========================================

export function toggleAddOn(addOnName) {
  const currentValue = appState.formData.addOns[addOnName];
  appState.formData.addOns[addOnName] = !currentValue;
}

export function getState() {
  return appState;
}

export function resetForm() {
  appState.formData = {
    personalInfo: {
      name: "",
      email: "",
      phone: "",
    },
    planInfo: {
      plan: "arcade",
      billing: "monthly",
    },
    addOns: {
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
    },
  };
  appState.currentStep = 1;
}
