export const appState = {
  currentStep: 1,

  formData: {
    personalInfo: {
      name: "",
      email: "",
      phone: "",
    },

    planInfo: {
      plan: "arcade",
      billing: "monthly",
    },

    addOns: {
      onlineService: false, // ✅ These are ADD-ONS!
      largerStorage: false,
      customizableProfile: false,
    },
  },
};
