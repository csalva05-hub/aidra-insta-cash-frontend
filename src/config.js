// src/config.js

const CONFIG = {
  // ✅ Base URL of your deployed backend (Vercel backend)
  API_BASE_URL: 'https://aidra-insta-cash-backend.vercel.app/api',

  // ✅ App name for headers and branding
  APP_NAME: 'Aidra InstaCash',

  // ✅ Default settings (can be modified from the dashboard later)
  DEFAULTS: {
    INTEREST_RATE: 0.20, // 20%
    LOAN_DURATION_DAYS: 66,
    PROCESSING_FEE_RATE: 0.02, // 2%
  },

  // ✅ Supported roles (more can be added dynamically)
  ROLES: ['super_admin', 'admin', 'loan_officer'],
};

export default CONFIG;
