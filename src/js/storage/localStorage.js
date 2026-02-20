import { getState } from '../state/stateManager.js';
import { appState } from '../state/appState.js';
import { resetForm } from '../state/stateManager.js';

export function saveFormData() {
  const state = getState();
  localStorage.setItem('appState', JSON.stringify(state));
}

export function loadFormData() {
  // Step 1: Get the saved string
  const savedData = localStorage.getItem('appState');

  // Step 2: Check if it exists
  if (savedData) {
    // Step 3: Parse it
    const loadedState = JSON.parse(savedData);

    // Step 4: Update the real appState (merge with defaults)
    appState.currentStep = loadedState.currentStep ?? appState.currentStep;
    appState.formData = {
      ...appState.formData,
      ...loadedState.formData,
      personalInfo: {
        ...appState.formData.personalInfo,
        ...loadedState.formData?.personalInfo,
      },
      planInfo: {
        ...appState.formData.planInfo,
        ...loadedState.formData?.planInfo,
      },
      addOns: {
        ...appState.formData.addOns,
        ...loadedState.formData?.addOns,
      },
    };
  }
}

export function clearFormData() {
  localStorage.removeItem('appState');
  resetForm();
}
