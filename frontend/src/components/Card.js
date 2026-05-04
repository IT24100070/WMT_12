/**
 * Card.js
 * Reusable surface card with hotel styling.
 */
import React from 'react';
import { StyleSheet, View } from 'react-native';

const C = {
  warmWhite: '#faf8f5',
  lightGray: '#e8e0d5',
};

export default function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: C.warmWhite,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: C.lightGray,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
});
