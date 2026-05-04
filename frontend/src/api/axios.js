/**
 * src/api/axios.js — compatibility shim
 *
 * All screen files import from '../api/axios'.
 * This file re-exports everything from the canonical services/api module
 * so no screen imports need to change.
 */
export { default, setAuthToken, clearAuthToken } from '../services/api';
