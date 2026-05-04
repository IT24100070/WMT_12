/**
 * reviewService.js
 * Review API calls for customers and review manager.
 */
import api from './api';

// ─── Public ───────────────────────────────────────────────────────────────────
export const getPublicReviews = () =>
  api.get('/public/reviews').then((r) => r.data);

// ─── Customer ─────────────────────────────────────────────────────────────────
export const submitReview = (payload) =>
  api.post('/customer-auth/reviews', payload).then((r) => r.data);

export const getMyReviews = () =>
  api.get('/customer-auth/reviews').then((r) => r.data);

export const deleteMyReview = (reviewId) =>
  api.delete(`/customer-auth/reviews/${reviewId}`).then((r) => r.data);

// ─── Review Manager Portal ────────────────────────────────────────────────────
export const getAllReviewsPortal = (params) =>
  api.get('/staff-portal/review-manager/reviews', { params }).then((r) => r.data);

export const respondToReview = (reviewId, response) =>
  api.post(`/staff-portal/review-manager/reviews/${reviewId}/respond`, { response }).then((r) => r.data);

export const deleteReview = (reviewId) =>
  api.delete(`/staff-portal/review-manager/reviews/${reviewId}`).then((r) => r.data);
