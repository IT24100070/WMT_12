/**
 * LoadingSpinner.js
 * Full-screen or inline loading indicator.
 */
import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';

const C = {
  darkBrown: '#3d2b1f',
  gold: '#c9a96e',
  warmWhite: '#faf8f5',
};

export default function LoadingSpinner({ message = 'Loading…', fullScreen = false }) {
  if (fullScreen) {
    return (
      <View style={styles.fullScreen}>
        <ActivityIndicator size="large" color={C.gold} />
        {message ? <Text style={styles.message}>{message}</Text> : null}
      </View>
    );
  }
  return (
    <View style={styles.inline}>
      <ActivityIndicator size="small" color={C.darkBrown} />
      {message ? <Text style={styles.inlineMessage}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: C.warmWhite,
    gap: 12,
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    gap: 8,
  },
  message: {
    color: C.darkBrown,
    fontSize: 15,
    fontWeight: '500',
  },
  inlineMessage: {
    color: C.darkBrown,
    fontSize: 13,
  },
});
