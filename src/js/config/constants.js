/* this is where FIXED data is kept, so fixed data does not change and we store it in config file */
export const CONFIG = {
  plans: {
    arcade: {
      monthly: 9,
      yearly: 90,
    },

    advanced: {
      monthly: 12,
      yearly: 120,
    },

    pro: {
      monthly: 15,
      yearly: 150,
    },
  },

  addOns: {
    onlineService: {
      name: "Online service",
      monthly: 1,
      yearly: 10,
      description: "Access to multiplayer games",
    },

    largerStorage: {
      name: "Larger storage",
      monthly: 2,
      yearly: 20,
      description: "Extra 1TB cloud save",
    },

    customizableProfile: {
      name: "Customizable profile",
      monthly: 2,
      yearly: 20,
      description: "Custom theme on your profile",
    },
  },

  planDetails: {
    arcade: {
      name: "Arcade",
      icon: "icon-arcade.svg",
    },
    advanced: {
      name: "Advanced",
      icon: "icon-advanced.svg",
    },
    pro: {
      name: "Pro",
      icon: "icon-pro.svg",
    },
  },
};
