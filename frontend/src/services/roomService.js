/**
 * roomService.js
 * All room-related API calls for both public and staff-portal endpoints.
 */
import api from './api';

// ─── Public ───────────────────────────────────────────────────────────────────
export const getPublicRooms = () =>
  api.get('/public/rooms').then((r) => r.data);

export const getRoomAvailability = (roomId, checkIn, checkOut) =>
  api
    .get(`/public/rooms/${roomId}/availability`, { params: { checkIn, checkOut } })
    .then((r) => r.data);

// ─── Room Manager Portal ──────────────────────────────────────────────────────
export const getRoomPortalRooms = () =>
  api.get('/staff-portal/rooms').then((r) => r.data);

export const createRoom = (payload) =>
  api.post('/staff-portal/rooms', payload).then((r) => r.data);

export const updateRoom = (roomId, payload) =>
  api.put(`/staff-portal/rooms/${roomId}`, payload).then((r) => r.data);

export const deleteRoom = (roomId) =>
  api.delete(`/staff-portal/rooms/${roomId}`).then((r) => r.data);
