export function sideBar() {
  return /* html */ `
        <div class="sidebar">
          <div class="steps">
            <div class="step-item">
              <div class="step-number active" data-step-indicator="1">1</div>
              <div class="step-info">
                <span class="step-label">STEP 1</span>
                <span class="step-title">YOUR INFO</span>
              </div>
            </div>

            <div class="step-item">
              <div class="step-number" data-step-indicator="2">2</div>
              <div class="step-info">
                <span class="step-label">STEP 2</span>
                <span class="step-title">SELECT PLAN</span>
              </div>
            </div>

            <div class="step-item">
              <div class="step-number" data-step-indicator="3">3</div>
              <div class="step-info">
                <span class="step-label">STEP 3</span>
                <span class="step-title">ADD-ONS</span>
              </div>
            </div>

            <div class="step-item">
              <div class="step-number" data-step-indicator="4">4</div>
              <div class="step-info">
                <span class="step-label">STEP 4</span>
                <span class="step-title">SUMMARY</span>
              </div>
            </div>
          </div>
        </div>

    `;
}
