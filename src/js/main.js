import { App } from './components/app';
import { appState } from './state/appState';
import { previousStep, nextStep } from './state/stateManager';
import { validateStep1, syncFormDataToState } from './utils/formSync';
import { attachStep2Listeners, syncStateToStep2 } from './utils/step2Sync';
import { attachStep3Listeners, syncStateToStep3 } from './utils/step3Sync.js';
import { syncStateToForm } from './utils/formSync';

/*  */
function render() {
  const app = document.getElementById('app');
  app.innerHTML = App();
  attachEventListeners();
  updateSidebarIndicators();
  updateNavigationButtons();

  if (appState.currentStep === 1) {
    syncStateToForm();
  }

  if (appState.currentStep === 2) {
    syncStateToStep2();
  }

  if (appState.currentStep === 3) {
    syncStateToStep3();
  }
}

function handleNextStep() {
  // This IS the handler

  if (appState.currentStep === 1) {
    const isValid = validateStep1();

    if (!isValid) {
      return;
    }

    syncFormDataToState(); // Save data if valid
  }
  nextStep();
  render();
}

function handlePreviousStep() {
  previousStep();
  render();
}

function attachEventListeners() {
  const nextBtn = document.getElementById('btn-next');
  const backBtn = document.getElementById('btn-back');
  nextBtn.addEventListener('click', handleNextStep);
  backBtn.addEventListener('click', handlePreviousStep);

  if (appState.currentStep === 2) {
    attachStep2Listeners();
  }

  if (appState.currentStep === 3) {
    attachStep3Listeners(); // ← Add this!
  }
}

// Somewhere else, attach it:

document.addEventListener('DOMContentLoaded', () => {
  render();
});

// Listen for billing toggle changes to re-render
window.addEventListener('billingChanged', () => {
  render();
});

function updateSidebarIndicators() {
  const allSteps = document.querySelectorAll('.step-number');

  allSteps.forEach((step) => {
    const stepNumber = parseInt(step.dataset.stepIndicator);

    if (stepNumber === appState.currentStep) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });
}

function updateNavigationButtons() {
  const nextBtn = document.getElementById('btn-next');
  const backBtn = document.getElementById('btn-back');

  if (appState.currentStep > 4) {
    nextBtn.hidden = true;
    backBtn.hidden = true;
  }

  if (appState.currentStep === 4) {
    nextBtn.textContent = 'Confirm';
  }

  if (appState.currentStep < 2) {
    backBtn.hidden = true;
  }
}
