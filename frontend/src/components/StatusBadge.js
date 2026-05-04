/**
 * StatusBadge.js
 * Pill badge for booking/order/issue statuses with colour coding.
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const STATUS_COLORS = {
  // Bookings
  pending:   { bg: '#fff3cd', text: '#856404' },
  confirmed: { bg: '#d1e7dd', text: '#0f5132' },
  checked_in: { bg: '#cff4fc', text: '#055160' },
  checked_out: { bg: '#e2e3e5', text: '#41464b' },
  cancelled:  { bg: '#f8d7da', text: '#842029' },
  // Orders
  received:  { bg: '#fff3cd', text: '#856404' },
  preparing: { bg: '#cff4fc', text: '#055160' },
  ready:     { bg: '#d1e7dd', text: '#0f5132' },
  delivered: { bg: '#e2e3e5', text: '#41464b' },
  // Issues
  open:      { bg: '#f8d7da', text: '#842029' },
  resolved:  { bg: '#d1e7dd', text: '#0f5132' },
};

const DEFAULT = { bg: '#e2e3e5', text: '#41464b' };

export default function StatusBadge({ status }) {
  const key = String(status || '').toLowerCase().replace(/\s+/g, '_');
  const colors = STATUS_COLORS[key] || DEFAULT;
  return (
    <View style={[styles.badge, { backgroundColor: colors.bg }]}>
      <Text style={[styles.text, { color: colors.text }]}>
        {String(status || '').replace(/_/g, ' ')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  text: { fontSize: 12, fontWeight: '700', textTransform: 'capitalize' },
});
