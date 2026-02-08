export function validateName(name) {
  // Check 1: Empty
  if (name.trim() === "") {
    return {
      isValid: false,
      error: "Name cannot be empty",
    };
  }

  // Check 2: Pattern
  const pattern = /^[a-zA-Z\s'-]+$/;

  if (!pattern.test(name)) {
    return {
      isValid: false,
      error: "Name can only contain letters, spaces, hyphens, and apostrophes",
    };
  }

  // All checks passed!
  return {
    isValid: true,
    error: "",
  };
}

export function validateEmail(email) {
  if (email.trim() === "") {
    return {
      isValid: false,
      error: "Email cannot be empty",
    };
  }
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!pattern.test(email)) {
    return {
      isValid: false,
      error: "not a valid email",
    };
  }

  return {
    isValid: true,
    error: "",
  };
}

export function validatePhone(phone) {
  if (phone.trim() === "") {
    return {
      isValid: false,
      error: "phone cannot be empty",
    };
  }

  const pattern = /^[0-9]{7,15}$/;

  if (!pattern.test(phone)) {
    return {
      isValid: false,
      error: "please enter a valid phone number",
    };
  }

  return {
    isValid: true,
    error: "",
  };
}
