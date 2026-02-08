// Main application entry point
console.log("🚀 App loaded!");
import {
  getState,
  nextStep,
  updateName,
  updatePlan,
  toggleAddOn,
} from "./state/stateManager.js";

// 1. Check initial state
console.log("Initial state:", getState());

// 2. Test updating name
console.log("\n--- Testing updateName ---");
updateName("Mostafa");
console.log("After updateName:", getState().formData.personalInfo);

// 3. Test next step
console.log("\n--- Testing nextStep ---");
nextStep();
console.log("Current step:", getState().currentStep);

// 4. Test updating plan
console.log("\n--- Testing updatePlan ---");
updatePlan("pro");
console.log("Selected plan:", getState().formData.planInfo);

// 5. Test toggling add-on
console.log("\n--- Testing toggleAddOn ---");
toggleAddOn("onlineService");
console.log("Add-ons:", getState().formData.addOns);

console.log("\n=== ALL TESTS COMPLETE ===");
console.log("Final state:", getState());
