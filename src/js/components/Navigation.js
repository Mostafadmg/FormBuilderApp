export function navigation() {
  return /* html */ `
   <div class="form-navigation" data-navigation>
              <button
                type="button"
                class="btn-back"
                data-btn-back
                id="btn-back"

              >
                Go Back
              </button>
              <button
                type="button"
                class="btn-next"
                data-btn-next
                id="btn-next"
              >
                Next Step
              </button>
              <button
                type="button"
                class="btn-confirm"
                data-btn-confirm
                id="btn-confirm"
                hidden
              >
                Confirm
              </button>
            </div>
    `;
}
