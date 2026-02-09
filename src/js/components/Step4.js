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
                    <p class="summary-plan-name" data-summary-plan-name>
                      Arcade (Monthly)
                    </p>
                    <button
                      type="button"
                      class="summary-change"
                      data-change-plan
                    >
                      Change
                    </button>
                  </div>
                  <p class="summary-plan-price" data-summary-plan-price>
                    $9/mo
                  </p>
                </div>

                <hr class="summary-divider" />

                <!-- Selected Add-ons -->
                <div class="summary-addons" data-summary-addons>
                  <!-- Add-ons will be dynamically injected here -->
                </div>
              </div>

              <!-- Total -->
              <div class="summary-total">
                <p class="summary-total-label" data-summary-total-label>
                  Total (per month)
                </p>
                <p class="summary-total-price" data-summary-total-price>
                  +$9/mo
                </p>
              </div>
            </div>

    `;
}
