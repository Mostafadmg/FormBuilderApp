import { getState } from '../state/stateManager.js';
import { getState, toggleAddOn } from '../state/stateManager.js';
import { CONFIG } from '../config/constants.js';

export function syncStateToStep3() {
  const addOns = getState().formData.addOns;

  Object.keys(addOns).forEach((addOn) => {
    const addOnName = addOns[addOn];
    const addOnInput = document.querySelector(`[value="${addOn}"]`);

    if (addOnName) {
      addOnInput.checked = true;
    } else {
      addOnInput.checked = false;
    }
  });
}

export function syncStateToStep3() {
  const addOns = getState().formData.addOns;

  Object.keys(addOns).forEach((addOn) => {
    const addOnValue = addOns[addOn]; // true or false
    const addOnInput = document.querySelector(`[value="${addOn}"]`);

    if (addOnInput) {
      // Safety check!
      addOnInput.checked = addOnValue;
    }
  });
}

export function getAddonPrice(addonName) {
  const billing = getState().formData.planInfo.billing;
  const price = CONFIG.addOns[addonName][billing];

  return `+$${price}/${billing === 'monthly' ? 'mo' : 'yr'}`;
}
