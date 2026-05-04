/**
 * issueService.js
 * Issue / maintenance report API calls.
 */
import api from './api';

// ─── Customer ─────────────────────────────────────────────────────────────────
export const reportIssue = (payload) =>
  api.post('/customer-auth/issues', payload).then((r) => r.data);

export const getMyIssues = () =>
  api.get('/customer-auth/issues').then((r) => r.data);

// ─── Admin ────────────────────────────────────────────────────────────────────
export const getAllIssues = (params) =>
  api.get('/admin/issues', { params }).then((r) => r.data);

export const updateIssueStatus = (issueId, status) =>
  api.patch(`/admin/issues/${issueId}/status`, { status }).then((r) => r.data);
