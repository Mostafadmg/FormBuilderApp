import { sideBar } from './Sidebar.js';
import { navigation } from './Navigation.js';
import { step1 } from './Step1.js';
import { step2 } from './Step2.js';
import { step3 } from './Step3.js';
import { step4 } from './Step4.js';
import { step5 } from './Step5.js';
import { appState } from '../state/appState.js';

function getCurrentStep() {
  switch (appState.currentStep) {
    case 1:
      return step1();
    case 2:
      return step2();
    case 3:
      return step3();
    case 4:
      return step4();
    case 5:
      return step5();
    default:
      return step1();
  }
}

export function App() {
  return /* html */ `


 <div class="app-container">
${sideBar()}

<div class="content-wrapper">
  <form class="form-container">
    ${getCurrentStep()}
    ${navigation()}
  </form>
</div>

 </div>
  `;
}
