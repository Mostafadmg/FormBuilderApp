export function step1() {
  return /* html */ `
  <!-- step 1 -->
            <div class="form-content" data-step="1" >
              <div class="form-header">
                <h1 class="form-title">Personal info</h1>
                <p class="form-subtitle">
                  Please provide your name, email address, and phone number.
                </p>
              </div>

              <div class="form-fields">
                <div class="form-field">
                  <div class="field-label-row">
                    <label for="name" class="field-label">Name</label>
                    <span class="field-error" data-error="name"></span>
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="field-input"
                    placeholder="e.g. Stephen King"
                    required
                  />
                </div>

                <div class="form-field">
                  <div class="field-label-row">
                    <label for="email" class="field-label">Email Address</label>
                    <span class="field-error" data-error="email"></span>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="field-input"
                    placeholder="e.g. stephenking@lorem.com"
                    required
                  />
                </div>

                <div class="form-field">
                  <div class="field-label-row">
                    <label for="phone" class="field-label">Phone Number</label>
                    <span class="field-error" data-error="phone"></span>
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    class="field-input"
                    placeholder="e.g. +1 234 567 890"
                    required
                  />
                </div>
              </div>
            </div>
    `;
}
