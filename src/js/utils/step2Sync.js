import { updatePlan, updateBilling, getState } from '../state/stateManager.js';
import { CONFIG } from '../config/constants.js';

export function syncPlanToState(plan) {
  updatePlan(plan);
}

export function syncBillingToState() {
  const toggle = document.getElementById('billing-toggle');

  if (!toggle) return;

  const billing = toggle.checked ? 'yearly' : 'monthly';
  updateBilling(billing);
}

export function syncStateToStep2() {
  const selectedPlan = getState().formData.planInfo.plan;
  const selectedBilling = getState().formData.planInfo.billing;

  // Restore plan selection
  const planInput = document.querySelector(`[value="${selectedPlan}"]`);

  if (planInput) {
    // ← Check it exists!
    planInput.checked = true;
  }

  // Restore billing toggle
  const billingToggle = document.getElementById('billing-toggle');

  if (billingToggle) {
    // ← Check it exists!
    if (selectedBilling === 'yearly') {
      billingToggle.checked = true;
    } else {
      billingToggle.checked = false;
    }
  }
}

export function attachStep2Listeners() {
  const planRadios = document.querySelectorAll('[name="plan"]');
  const billingToggle = document.getElementById('billing-toggle');

  if (!billingToggle) return;

  planRadios.forEach((input) => {
    input.addEventListener('change', function () {
      const value = this.value;
      syncPlanToState(value);
    });
  });

  billingToggle.addEventListener('change', () => {
    syncBillingToState();
    
    // Import render from main.js to re-render
    // We'll need to pass render as a callback or trigger it differently
    // For now, we'll dispatch a custom event
    window.dispatchEvent(new Event('billingChanged'));
  });
}

// Helper function to get formatted plan price
export function getPlanPrice(planName) {
  const billing = getState().formData.planInfo.billing;
  const price = CONFIG.plans[planName][billing];
  const suffix = billing === 'monthly' ? '/mo' : '/yr';
  return `$${price}${suffix}`;
}

// Helper function to check if bonus text should show
export function shouldShowBonus() {
  return getState().formData.planInfo.billing === 'yearly';
}

function updateAllPrices() {
  const billingMode = getState().formData.planInfo.billing;
}
