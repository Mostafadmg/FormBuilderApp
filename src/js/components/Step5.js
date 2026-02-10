import thankYouIcon from '/assets/images/icon-thank-you.svg';

export function step5() {
  return /* html */ `
 <div class="form-content summary" data-step="5" >
              <div class="summary-container">
                <div class="summary-icon">
                  <img
                    src="${thankYouIcon}"
                    alt="Thank you checkmark icon"
                  />
                </div>
                <h1 class="summary-title">Thank you!</h1>
                <p class="summary-message">
                  Thanks for confirming your subscription! We hope you have fun
                  using our platform. If you ever need support, please feel free
                  to email us at support@loremgaming.com.
                </p>
              </div>
            </div>
    `;
}
