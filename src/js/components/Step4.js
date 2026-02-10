import {
  getSelectedPlanDisplay,
  getSelectedPlanPrice,
  getSelectedAddOns,
  calculateTotal,
} from '../utils/step4Sync.js';
import { getState } from '../state/stateManager.js';

export function step4() {
  return /* html */ `
  <div class="form-content" data-step="4" >
              <div class="form-header">
                <h1 class="form-title">Finishing up</h1>
                <p class="form-subtitle">
                  Double-check everything looks OK before confirming.
                </p>
              </div>

              <div class="summary-card" id="summary-card">
                <!-- Selected Plan -->
                <div class="summary-plan">
                  <div class="summary-plan-info">
                    <p class="summary-plan-name">
                      ${getSelectedPlanDisplay()}
                    </p>
                    <button
                      type="button"
                      class="summary-change"
                      data-change-plan
                    >
                      Change
                    </button>
                  </div>
                  <p class="summary-plan-price">
                    ${getSelectedPlanPrice()}
                  </p>
                </div>

                <hr class="summary-divider" />

                <!-- Selected Add-ons -->
                <div class="summary-addons">
                  ${getSelectedAddOns().map(addon => `
                    <div class="summary-addon">
                      <p class="summary-addon-name">${addon.name}</p>
                      <p class="summary-addon-price">${addon.price}</p>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Total -->
              <div class="summary-total">
                <p class="summary-total-label">
                  Total (per ${getState().formData.planInfo.billing === 'monthly' ? 'month' : 'year'})
                </p>
                <p class="summary-total-price">
                  ${calculateTotal()}
                </p>
              </div>
            </div>

    `;
}
