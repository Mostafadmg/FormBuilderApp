(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function b(){return`
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

    `}function S(){return`
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
    `}function h(){return`
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
    `}const t={currentStep:1,formData:{personalInfo:{name:"",email:"",phone:""},planInfo:{plan:"arcade",billing:"monthly"},addOns:{onlineService:!1,largerStorage:!1,customizableProfile:!1}}};function I(){t.currentStep<5&&t.currentStep++}function E(){t.currentStep>1&&t.currentStep--}function x(e){e>=1&&e<=5&&(t.currentStep=e)}function D(e){t.formData.personalInfo.name=e}function $(e){t.formData.personalInfo.email=e}function k(e){t.formData.personalInfo.phone=e}function w(e){t.formData.planInfo.plan=e}function O(e){t.formData.planInfo.billing=e}function B(e){const a=t.formData.addOns[e];t.formData.addOns[e]=!a}function i(){return t}const c={plans:{arcade:{monthly:9,yearly:90},advanced:{monthly:12,yearly:120},pro:{monthly:15,yearly:150}},addOns:{onlineService:{name:"Online service",monthly:1,yearly:10,description:"Access to multiplayer games"},largerStorage:{name:"Larger storage",monthly:2,yearly:20,description:"Extra 1TB cloud save"},customizableProfile:{name:"Customizable profile",monthly:2,yearly:20,description:"Custom theme on your profile"}}};function d(){const e=i();localStorage.setItem("appState",JSON.stringify(e))}function P(){const e=localStorage.getItem("appState");if(e){const a=JSON.parse(e);t.currentStep=a.currentStep??t.currentStep,t.formData={...t.formData,...a.formData,personalInfo:{...t.formData.personalInfo,...a.formData?.personalInfo},planInfo:{...t.formData.planInfo,...a.formData?.planInfo},addOns:{...t.formData.addOns,...a.formData?.addOns}}}}function L(e){w(e)}function F(){const e=document.getElementById("billing-toggle");if(!e)return;const a=e.checked?"yearly":"monthly";O(a)}function A(){const e=i().formData.planInfo.plan,a=i().formData.planInfo.billing,n=document.querySelector(`[value="${e}"]`);n&&(n.checked=!0);const l=document.getElementById("billing-toggle");l&&(a==="yearly"?l.checked=!0:l.checked=!1)}function T(){const e=document.querySelectorAll('[name="plan"]'),a=document.getElementById("billing-toggle");a&&(e.forEach(n=>{n.addEventListener("change",function(){const l=this.value;L(l),d()})}),a.addEventListener("change",()=>{F(),d(),window.dispatchEvent(new Event("billingChanged"))}))}function u(e){const a=i().formData.planInfo.billing;return`$${c.plans[e][a]}${a==="monthly"?"/mo":"/yr"}`}function f(){return i().formData.planInfo.billing==="yearly"}const C="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='%23FFAF7E'/%3e%3cpath%20fill='%23FFF'%20fill-rule='nonzero'%20d='M24.995%2018.005h-3.998v5.998h-2v-5.998H15a1%201%200%200%200-1%201V29a1%201%200%200%200%201%201h9.995a1%201%200%200%200%201-1v-9.995a1%201%200%200%200-1-1Zm-5.997%208.996h-2v-1.999h2v2Zm2-11.175a2.999%202.999%200%201%200-2%200v2.18h2v-2.18Z'/%3e%3c/g%3e%3c/svg%3e",V="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='%23F9818E'/%3e%3cpath%20fill='%23FFF'%20fill-rule='nonzero'%20d='M25.057%2015H14.944C12.212%2015%2010%2017.03%2010%2019.885c0%202.857%202.212%204.936%204.944%204.936h10.113c2.733%200%204.943-2.08%204.943-4.936S27.79%2015%2025.057%2015ZM17.5%2020.388c0%20.12-.108.237-.234.237h-1.552v1.569c0%20.126-.138.217-.259.217H14.5c-.118%200-.213-.086-.213-.203v-1.583h-1.569c-.126%200-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12%200%20.236.108.236.234v1.551h1.555c.125%200%20.231.083.231.204v.988Zm5.347.393a.862.862%200%200%201-.869-.855c0-.472.39-.856.869-.856.481%200%20.87.384.87.856%200%20.471-.389.855-.87.855Zm1.9%201.866a.86.86%200%200%201-.87-.852.86.86%200%200%201%20.87-.855c.48%200%20.87.38.87.855a.86.86%200%200%201-.87.852Zm0-3.736a.862.862%200%200%201-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862%200%200%201-.87.854Zm1.899%201.87a.862.862%200%200%201-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862%200%200%201-.868.855Z'/%3e%3c/g%3e%3c/svg%3e",Z="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='%23483EFF'/%3e%3cpath%20fill='%23FFF'%20fill-rule='nonzero'%20d='M26.666%2013H13.334A3.333%203.333%200%200%200%2010%2016.333v7.193a3.447%203.447%200%200%200%202.14%203.24c1.238.5%202.656.182%203.56-.8L18.52%2023h2.96l2.82%202.966a3.2%203.2%200%200%200%203.56.8%203.447%203.447%200%200%200%202.14-3.24v-7.193A3.333%203.333%200%200%200%2026.666%2013Zm-9.333%206H16v1.333a.667.667%200%200%201-1.333%200V19h-1.333a.667.667%200%200%201%200-1.334h1.333v-1.333a.667.667%200%201%201%201.333%200v1.333h1.333a.667.667%200%201%201%200%201.334Zm7.333%202a2.667%202.667%200%201%201%200-5.333%202.667%202.667%200%200%201%200%205.333ZM26%2018.333a1.333%201.333%200%201%201-2.667%200%201.333%201.333%200%200%201%202.667%200Z'/%3e%3c/g%3e%3c/svg%3e";function M(){return`
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
                        src="${C}"
                        alt="Arcade plan icon"
                      />
                    </div>
                    <div class="plan-info">
                      <p class="plan-name">Arcade</p>
                      <p class="plan-price">${u("arcade")}</p>
                      <p class="plan-time" ${f()?"":"hidden"}>
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
                        src="${V}"
                        alt="Advanced plan icon"
                      />
                    </div>
                    <div class="plan-info">
                      <p class="plan-name">Advanced</p>
                      <p class="plan-price">${u("advanced")}</p>
                      <p class="plan-time" ${f()?"":"hidden"}>
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
                        src="${Z}"
                        alt="Pro plan icon"
                      />
                    </div>
                    <div class="plan-info">
                      <p class="plan-name">Pro</p>
                      <p class="plan-price">${u("pro")}</p>
                      <p class="plan-time" ${f()?"":"hidden"}>
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
    `}function z(){document.querySelectorAll(".addon-checkbox").forEach(a=>{a.addEventListener("change",n=>{B(n.target.value),d()})})}function N(){const e=i().formData.addOns;Object.keys(e).forEach(a=>{const n=document.querySelector(`[value="${a}"]`);n&&(n.checked=e[a])})}function m(e){const a=i().formData?.planInfo?.billing??"monthly",n=c.addOns?.[e];return n?`+$${n[a]??n.monthly??0}${a==="monthly"?"/mo":"/yr"}`:""}function q(){return`
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
                  <span class="addon-price">${m("onlineService")}</span>
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
                  <span class="addon-price">${m("largerStorage")}</span>
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
                  <span class="addon-price">${m("customizableProfile")}</span>
                </label>
              </div>
            </div>
    `}function H(){const e=i().formData.planInfo.plan,a=e[0].toUpperCase()+e.slice(1),n=i().formData.planInfo.billing,l=n[0].toUpperCase()+n.slice(1);return`${a} (${l})`}function R(){const e=i().formData.planInfo.billing,a=i().formData.planInfo.plan;return`$${c.plans[a][e]}${e==="monthly"?"/mo":"/yr"}`}function Y(){const e=i().formData.addOns,a=[];return Object.keys(e).forEach(n=>{e[n]===!0&&a.push({name:c.addOns[n].name,price:m(n)})}),a}function j(){const e=i().formData.planInfo.billing,a=i().formData.planInfo.plan;let l=c.plans[a][e];const s=i().formData.addOns;return Object.keys(s).forEach(r=>{s[r]===!0&&(l+=c.addOns[r][e])}),`$${l}${e==="monthly"?"/mo":"/yr"}`}function U(){return`
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
                      ${H()}
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
                    ${R()}
                  </p>
                </div>

                <hr class="summary-divider" />

                <!-- Selected Add-ons -->
                <div class="summary-addons">
                  ${Y().map(e=>`
                    <div class="summary-addon">
                      <p class="summary-addon-name">${e.name}</p>
                      <p class="summary-addon-price">${e.price}</p>
                    </div>
                  `).join("")}
                </div>
              </div>

              <!-- Total -->
              <div class="summary-total">
                <p class="summary-total-label">
                  Total (per ${i().formData.planInfo.billing==="monthly"?"month":"year"})
                </p>
                <p class="summary-total-price">
                  ${j()}
                </p>
              </div>
            </div>

    `}const K="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%3e%3cg%20fill='none'%3e%3ccircle%20cx='40'%20cy='40'%20r='40'%20fill='%23F9818E'/%3e%3cpath%20fill='%23E96170'%20d='M48.464%2079.167c.768-.15%201.53-.321%202.288-.515a40.04%2040.04%200%200%200%203.794-1.266%2040.043%2040.043%200%200%200%203.657-1.63%2040.046%2040.046%200%200%200%2012.463-9.898A40.063%2040.063%200%200%200%2078.3%2051.89c.338-1.117.627-2.249.867-3.391L55.374%2024.698a21.6%2021.6%200%200%200-15.332-6.365%2021.629%2021.629%200%200%200-15.344%206.365c-8.486%208.489-8.486%2022.205%200%2030.694l23.766%2023.775Z'/%3e%3cpath%20fill='%23FFF'%20d='M40.003%2018.333a21.58%2021.58%200%200%201%2015.31%206.351c8.471%208.471%208.471%2022.158%200%2030.63-8.47%208.47-22.156%208.47-30.627%200-8.47-8.472-8.47-22.159%200-30.63a21.594%2021.594%200%200%201%2015.317-6.35Zm9.865%2015c-.316.028-.622.15-.872.344l-12.168%209.13-5.641-5.642c-1.224-1.275-3.63%201.132-2.356%202.356l6.663%206.663c.56.56%201.539.63%202.173.156l13.326-9.995c1.122-.816.43-2.993-.956-3.013a1.666%201.666%200%200%200-.17%200Z'/%3e%3c/g%3e%3c/svg%3e";function G(){return`
 <div class="form-content summary" data-step="5" >
              <div class="summary-container">
                <div class="summary-icon">
                  <img
                    src="${K}"
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
    `}function J(){switch(t.currentStep){case 1:return h();case 2:return M();case 3:return q();case 4:return U();case 5:return G();default:return h()}}function W(){return`


 <div class="app-container">
${b()}

<div class="content-wrapper">
  <form class="form-container">
    ${J()}
    ${S()}
  </form>
</div>

 </div>
  `}function Q(e){return e.trim()===""?{isValid:!1,error:"Name cannot be empty"}:/^[a-zA-Z\s'-]+$/.test(e)?{isValid:!0,error:""}:{isValid:!1,error:"Name can only contain letters, spaces, hyphens, and apostrophes"}}function X(e){return e.trim()===""?{isValid:!1,error:"Email cannot be empty"}:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)?{isValid:!0,error:""}:{isValid:!1,error:"not a valid email"}}function _(e){return e.trim()===""?{isValid:!1,error:"phone cannot be empty"}:/^[0-9]{7,15}$/.test(e)?{isValid:!0,error:""}:{isValid:!1,error:"please enter a valid phone number"}}function y(){const e=document.getElementById("name"),a=document.getElementById("email"),n=document.getElementById("phone");!e||!a||!n||(D(e.value),$(a.value),k(n.value))}function ee(){const e=document.getElementById("name"),a=document.getElementById("email"),n=document.getElementById("phone");if(!e||!a||!n)return!0;const l=Q(e.value),s=X(a.value),o=_(n.value);if(l.isValid)g("name");else{const r=l.error;v("name",r)}if(s.isValid)g("email");else{const r=s.error;v("email",r)}if(o.isValid)g("phone");else{const r=o.error;v("phone",r)}return l.isValid&&s.isValid&&o.isValid}function v(e,a){const n=document.querySelector(`[data-error="${e}"]`),l=document.getElementById(e);n.textContent=a,n.classList.add("active"),l.classList.remove("error"),l.offsetWidth,l.classList.add("error")}function g(e){const a=document.querySelector(`[data-error="${e}"]`),n=document.getElementById(e);a.textContent="",a.classList.remove("active"),n.classList.remove("error")}function ae(){const e=document.getElementById("name"),a=document.getElementById("email"),n=document.getElementById("phone");if(!e||!a||!n)return;const l=i();e.value=l.formData.personalInfo.name,a.value=l.formData.personalInfo.email,n.value=l.formData.personalInfo.phone}function p(){const e=document.getElementById("app");e.innerHTML=W(),le(),se(),oe(),t.currentStep===1&&ae(),t.currentStep===2&&A(),t.currentStep===3&&N()}function ne(){if(t.currentStep===1){if(!ee())return;y()}I(),d(),p()}function te(){E(),d(),p()}function le(){const e=document.getElementById("btn-next"),a=document.getElementById("btn-back");e.addEventListener("click",ne),a.addEventListener("click",te),t.currentStep===2&&T(),t.currentStep===3&&z(),document.querySelectorAll(".step-item").forEach(l=>{l.addEventListener("click",()=>{const s=l.querySelector(".step-number"),o=parseInt(s.dataset.stepIndicator);t.currentStep===1&&y(),x(o),d(),p()})})}document.addEventListener("DOMContentLoaded",()=>{P(),p()});window.addEventListener("billingChanged",()=>{p()});function se(){document.querySelectorAll(".step-number").forEach(a=>{parseInt(a.dataset.stepIndicator)===t.currentStep?a.classList.add("active"):a.classList.remove("active")})}function oe(){const e=document.getElementById("btn-next"),a=document.getElementById("btn-back");t.currentStep>4&&(e.hidden=!0,a.hidden=!0),t.currentStep===4&&(e.textContent="Confirm"),t.currentStep<2&&(a.hidden=!0)}
