import axios from 'axios';

/**
 * API base URL — always points to the deployed Railway backend.
 *
 * Override for local development by setting in frontend/.env:
 *   EXPO_PUBLIC_API_URL=http://YOUR_LAN_IP:5000/api
 * Then restart Expo with: npx expo start -c
 */
const PRODUCTION_URL = 'https://wmt12-production.up.railway.app/api';

function resolveBaseUrl() {
  const fromEnv =
    typeof process !== 'undefined' && process.env?.EXPO_PUBLIC_API_URL
      ? String(process.env.EXPO_PUBLIC_API_URL).trim().replace(/\/+$/, '')
      : '';
  if (fromEnv) {
    return fromEnv.endsWith('/api') ? fromEnv : `${fromEnv}/api`;
  }
  // Default: always use Railway for all platforms (web, android, ios)
  return PRODUCTION_URL;
}


const BASE_URL = resolveBaseUrl();

if (__DEV__) {
  console.log(`[api] baseURL = ${BASE_URL}`);
}

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const roleTokens = {
  admin: null,
  staff: null,
  customer: null,
};
let activeScope = null;

function resolveArgs(arg1, arg2) {
  if (arg2 === undefined) return { scope: 'default', token: arg1 };
  return { scope: String(arg1 || 'default').toLowerCase(), token: arg2 };
}

function applyActiveAuthHeader() {
  if (!activeScope || !roleTokens[activeScope]) {
    delete instance.defaults.headers.common['Authorization'];
    return;
  }
  instance.defaults.headers.common['Authorization'] = `Bearer ${roleTokens[activeScope]}`;
}

export const setAuthToken = (arg1, arg2) => {
  const { scope, token } = resolveArgs(arg1, arg2);
  if (scope !== 'default') {
    roleTokens[scope] = token || null;
    activeScope = scope;
    applyActiveAuthHeader();
    return;
  }
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common['Authorization'];
  }
};

export const clearAuthToken = (scope = 'default') => {
  const normalized = String(scope || 'default').toLowerCase();
  if (normalized !== 'default') {
    roleTokens[normalized] = null;
    if (activeScope === normalized) {
      const fallback = ['staff', 'customer', 'admin'].find((s) => roleTokens[s]);
      activeScope = fallback || null;
      applyActiveAuthHeader();
    }
    return;
  }
  delete instance.defaults.headers.common['Authorization'];
};

export default instance;
