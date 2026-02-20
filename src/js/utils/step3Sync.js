import { getState, toggleAddOn } from '../state/stateManager.js';
import { CONFIG } from '../config/constants.js';
import { saveFormData } from '../storage/localStorage.js';

export function attachStep3Listeners() {
  const addOnCheckboxes = document.querySelectorAll('.addon-checkbox');

  addOnCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      toggleAddOn(e.target.value);
      saveFormData();
    });
  });
}

export function syncStateToStep3() {
  const addOns = getState().formData.addOns;

  Object.keys(addOns).forEach((addonName) => {
    const checkbox = document.querySelector(`[value="${addonName}"]`);

    if (checkbox) {
      checkbox.checked = addOns[addonName];
    }
  });
}

export function getAddonPrice(addonName) {
  const billing = getState().formData?.planInfo?.billing ?? 'monthly';
  const addOnConfig = CONFIG.addOns?.[addonName];

  if (!addOnConfig) {
    return '';
  }

  const price = addOnConfig[billing] ?? addOnConfig.monthly ?? 0;
  const suffix = billing === 'monthly' ? '/mo' : '/yr';

  return `+$${price}${suffix}`;
}
