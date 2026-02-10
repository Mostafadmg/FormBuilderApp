import { getAddonPrice } from '../utils/step3Sync.js';

export function step3() {
  return /* html */ `
 <div class="form-content" data-step="3" >
              <div class="form-header">
                <h1 class="form-title">Pick add-ons</h1>
                <p class="form-subtitle">
                  Add-ons help to enhance your gaming experience.
                </p>
              </div>

              <div class="form-fields" data-addons-container>
                <label class="addon" data-addon="onlineService">
                  <input
                    type="checkbox"
                    name="onlineService"
                    value="onlineService"
                    class="addon-checkbox"
                  />
                  <span class="addon-checkmark"></span>
                  <div class="addon-info">
                    <p class="addon-name">Online service</p>
                    <p class="addon-desc">Access to multiplayer games</p>
                  </div>
                  <span class="addon-price">${getAddonPrice('onlineService')}</span>
                </label>

                <label class="addon" data-addon="largerStorage">
                  <input
                    type="checkbox"
                    name="largerStorage"
                    value="largerStorage"
                    class="addon-checkbox"
                  />
                  <span class="addon-checkmark"></span>
                  <div class="addon-info">
                    <p class="addon-name">Larger storage</p>
                    <p class="addon-desc">Extra 1TB cloud save</p>
                  </div>
                  <span class="addon-price">${getAddonPrice('largerStorage')}</span>
                </label>

                <label class="addon" data-addon="customizableProfile">
                  <input
                    type="checkbox"
                    name="customizableProfile"
                    value="customizableProfile"
                    class="addon-checkbox"
                  />
                  <span class="addon-checkmark"></span>
                  <div class="addon-info">
                    <p class="addon-name">Customizable profile</p>
                    <p class="addon-desc">Custom theme on your profile</p>
                  </div>
                  <span class="addon-price">${getAddonPrice('customizableProfile')}</span>
                </label>
              </div>
            </div>
    `;
}
