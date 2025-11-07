// src/config.js

// Detect whether we're in development (localhost) or production (Vercel)
const isLocalhost =
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' ||
   window.location.hostname === '127.0.0.1');

// ✅ Set backend API base URL dynamically
const CONFIG = {
  API_BASE_URL: isLocalhost
    ? 'http://localhost:5000/api' // local backend (for local dev)
    : 'https://aidra-insta-cash-backend.vercel.app/api', // deployed backend

  APP_NAME: 'Aidra InstaCash',

  DEFAULTS: {
    INTEREST_RATE: 0.20,       // 20%
    LOAN_DURATION_DAYS: 66,    // 66 days
    PROCESSING_FEE_RATE: 0.02, // 2%
  },

  ROLES: ['super_admin', 'admin', 'loan_officer'],
};

export default CONFIG;
