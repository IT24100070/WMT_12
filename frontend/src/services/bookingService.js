/**
 * bookingService.js
 * Booking API calls for customers and receptionists.
 */
import api from './api';

// ─── Customer ─────────────────────────────────────────────────────────────────
export const createBooking = (payload) =>
  api.post('/customer-auth/bookings', payload).then((r) => r.data);

export const getMyBookings = () =>
  api.get('/customer-auth/bookings').then((r) => r.data);

export const cancelBooking = (bookingId) =>
  api.delete(`/customer-auth/bookings/${bookingId}`).then((r) => r.data);

// ─── Receptionist ─────────────────────────────────────────────────────────────
export const getReceptionistBookings = (params) =>
  api.get('/staff-portal/receptionist/bookings', { params }).then((r) => r.data);

export const updateBookingStatus = (bookingId, status) =>
  api.patch(`/staff-portal/receptionist/bookings/${bookingId}/status`, { status }).then((r) => r.data);

export const checkInBooking = (bookingId) =>
  api.post(`/staff-portal/receptionist/bookings/${bookingId}/check-in`).then((r) => r.data);

export const checkOutBooking = (bookingId) =>
  api.post(`/staff-portal/receptionist/bookings/${bookingId}/check-out`).then((r) => r.data);
