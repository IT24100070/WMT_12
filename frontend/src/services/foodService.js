/**
 * foodService.js
 * Food menu and order API calls.
 */
import api from './api';

// ─── Public ───────────────────────────────────────────────────────────────────
export const getFoodItems = () =>
  api.get('/public/food-items').then((r) => r.data);

// ─── Customer Orders ──────────────────────────────────────────────────────────
export const placeOrder = (payload) =>
  api.post('/customer-auth/food-orders', payload).then((r) => r.data);

export const getMyOrders = () =>
  api.get('/customer-auth/food-orders').then((r) => r.data);

// ─── Kitchen Manager Portal ───────────────────────────────────────────────────
export const getKitchenOrders = (params) =>
  api.get('/staff-portal/kitchen/orders', { params }).then((r) => r.data);

export const updateOrderStatus = (orderId, status) =>
  api.patch(`/staff-portal/kitchen/orders/${orderId}/status`, { status }).then((r) => r.data);

export const getMenuItems = () =>
  api.get('/staff-portal/kitchen/menu').then((r) => r.data);

export const createMenuItem = (payload) =>
  api.post('/staff-portal/kitchen/menu', payload).then((r) => r.data);

export const updateMenuItem = (itemId, payload) =>
  api.put(`/staff-portal/kitchen/menu/${itemId}`, payload).then((r) => r.data);

export const deleteMenuItem = (itemId) =>
  api.delete(`/staff-portal/kitchen/menu/${itemId}`).then((r) => r.data);
