import { getPlanPrice, shouldShowBonus } from '../utils/step2Sync.js';

export function step2() {
  return /* html */ `
 <!-- step 2 -->
            <div class="form-content" data-step="2" >
              <div class="form-header">
                <h1 class="form-title">Select your plan</h1>
                <p class="form-subtitle">
                  You have the option of monthly or yearly billing.
                </p>
              </div>

              <div class="form-fields" data-plans-container>
                <div class="form-field">
                  <label class="plan" data-plan="arcade">
                    <input
                      type="radio"
                      name="plan"
                      value="arcade"
                      data-plan-type="arcade"
                      class="plan-radio"
                      checked
                    />
                    <div>
                      <img
                        src="./assets/images/icon-arcade.svg"
                        alt="Arcade plan icon"
                      />
                    </div>
                    <div class="plan-info">
                      <p class="plan-name">Arcade</p>
                      <p class="plan-price">${getPlanPrice('arcade')}</p>
                      <p class="plan-time" ${shouldShowBonus() ? '' : 'hidden'}>
                        2 months free
                      </p>
                    </div>
                  </label>
                </div>

                <div class="form-field">
                  <label class="plan" data-plan="advanced">
                    <input
                      type="radio"
                      name="plan"
                      value="advanced"
                      data-plan-type="advanced"
                      class="plan-radio"
                    />
                    <div>
                      <img
                        src="./assets/images/icon-advanced.svg"
                        alt="Advanced plan icon"
                      />
                    </div>
                    <div class="plan-info">
                      <p class="plan-name">Advanced</p>
                      <p class="plan-price">${getPlanPrice('advanced')}</p>
                      <p class="plan-time" ${shouldShowBonus() ? '' : 'hidden'}>
                        2 months free
                      </p>
                    </div>
                  </label>
                </div>
                <div class="form-field">
                  <label class="plan" data-plan="pro">
                    <input
                      type="radio"
                      name="plan"
                      value="pro"
                      data-plan-type="pro"
                      class="plan-radio"
                    />
                    <div>
                      <img
                        src="./assets/images/icon-pro.svg"
                        alt="Pro plan icon"
                      />
                    </div>
                    <div class="plan-info">
                      <p class="plan-name">Pro</p>
                      <p class="plan-price">${getPlanPrice('pro')}</p>
                      <p class="plan-time" ${shouldShowBonus() ? '' : 'hidden'}>
                        2 months free
                      </p>
                    </div>
                  </label>
                </div>

                <div class="toggle-container">
                  <span class="billing" data-billing-label="monthly"
                    >Monthly</span
                  >
                  <label for="billing-toggle" class="switch">
                    <input
                      type="checkbox"
                      name="billingCycle"
                      id="billing-toggle"
                      data-billing-toggle
                      aria-label="Toggle between monthly and yearly billing"
                    />
                    <span class="slider"></span>
                  </label>
                  <span class="billing" data-billing-label="yearly"
                    >Yearly</span
                  >
                </div>
              </div>
            </div>
    `;
}
