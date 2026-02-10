import { getState } from '../state/stateManager';
import { CONFIG } from '../config/constants';
import { getAddonPrice } from './step3Sync';

export function getSelectedPlanDisplay() {
  const planName = getState().formData.planInfo.plan;
  const capitalizedPlan = planName[0].toUpperCase() + planName.slice(1);
  const billingName = getState().formData.planInfo.billing;
  const capitalizedBilling =
    billingName[0].toUpperCase() + billingName.slice(1);

  return `${capitalizedPlan} (${capitalizedBilling})`; /* returns Arcade (Monthly) */
}

export function getSelectedPlanPrice() {
  const billing = getState().formData.planInfo.billing;
  const plan = getState().formData.planInfo.plan;

  const price = CONFIG.plans[plan][billing];

  const suffix = billing === 'monthly' ? '/mo' : '/yr';
  return `$${price}${suffix}`;
}

export function getSelectedAddOns() {
  const addOns = getState().formData.addOns;
  const result = [];

  Object.keys(addOns).forEach((addonName) => {
    if (addOns[addonName] === true) {
      result.push({
        name: CONFIG.addOns[addonName].name,
        price: getAddonPrice(addonName),
      });
    }
  });

  return result;
}

/*
[
  { name: "Online service", price: "+$1/mo" },
  { name: "Customizable profile", price: "+$2/mo" }
]

*/

export function calculateTotal() {
  const billing = getState().formData.planInfo.billing;
  const plan = getState().formData.planInfo.plan;
  const planPrice = CONFIG.plans[plan][billing]; // lets say yearly ==> 90

  let total = planPrice; // Changed const to let!
  const addOns = getState().formData.addOns;

  Object.keys(addOns).forEach((addonName) => {
    if (addOns[addonName] === true) {
      total += CONFIG.addOns[addonName][billing];
    }
  });

  const suffix = billing === 'monthly' ? '/mo' : '/yr';
  return `$${total}${suffix}`;
}
