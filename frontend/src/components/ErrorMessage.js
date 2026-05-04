/**
 * ErrorMessage.js
 * Displays an API or validation error with optional retry button.
 */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const C = {
  error: '#b00020',
  errorBg: '#fdecea',
  errorBorder: '#f5c6cb',
  darkBrown: '#3d2b1f',
};

export default function ErrorMessage({ message, onRetry }) {
  if (!message) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>⚠ {message}</Text>
      {onRetry && (
        <TouchableOpacity style={styles.retryBtn} onPress={onRetry}>
          <Text style={styles.retryText}>Retry</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 14,
    borderRadius: 8,
    backgroundColor: C.errorBg,
    borderWidth: 1,
    borderColor: C.errorBorder,
    alignItems: 'center',
    gap: 10,
  },
  text: {
    color: C.error,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
  },
  retryBtn: {
    paddingVertical: 6,
    paddingHorizontal: 18,
    backgroundColor: C.darkBrown,
    borderRadius: 6,
  },
  retryText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
  },
});
