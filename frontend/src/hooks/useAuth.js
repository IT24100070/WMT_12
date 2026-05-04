/**
 * useAuth.js
 * Convenient re-export for all three auth contexts in one import.
 * Usage:
 *   import { useCustomerAuth, useStaffAuth, useAdminAuth } from '../hooks/useAuth';
 */
export { useCustomerAuth } from '../context/CustomerAuthContext';
export { useStaffAuth } from '../context/StaffAuthContext';
export { useAdminAuth } from '../context/AdminAuthContext';
