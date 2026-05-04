/**
 * authService.js
 * Thin wrappers around the API for all auth-related calls.
 * Consumed by context providers — keeps network logic out of components.
 */
import api from './api';

// ─── Admin ────────────────────────────────────────────────────────────────────
export const adminLogin = (username, password) =>
  api.post('/auth/login', { username, password }).then((r) => r.data);

// ─── Staff ────────────────────────────────────────────────────────────────────
export const staffLogin = (username, password) =>
  api.post('/staff-portal/login', { username, password }).then((r) => r.data);

export const staffMe = () =>
  api.get('/staff-portal/me').then((r) => r.data);

// ─── Customer ─────────────────────────────────────────────────────────────────
export const customerLogin = (email, password) =>
  api.post('/customer-auth/login', { email, password }).then((r) => r.data);

export const customerRegister = (payload) =>
  api.post('/customer-auth/register', payload).then((r) => r.data);

export const customerMe = () =>
  api.get('/customer-auth/me').then((r) => r.data);
