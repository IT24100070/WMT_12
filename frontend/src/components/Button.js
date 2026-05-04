/**
 * Button.js
 * Reusable styled button with loading state.
 */
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';

const C = {
  darkBrown: '#3d2b1f',
  gold: '#c9a96e',
  cream: '#f5f0e8',
};

export default function Button({
  title,
  onPress,
  loading = false,
  disabled = false,
  variant = 'primary', // 'primary' | 'outline' | 'ghost'
  style,
  textStyle,
}) {
  const isDisabled = disabled || loading;

  const containerStyle = [
    styles.base,
    variant === 'primary' && styles.primary,
    variant === 'outline' && styles.outline,
    variant === 'ghost' && styles.ghost,
    isDisabled && styles.disabled,
    style,
  ];

  const labelStyle = [
    styles.label,
    variant === 'primary' && styles.labelPrimary,
    variant === 'outline' && styles.labelOutline,
    variant === 'ghost' && styles.labelGhost,
    textStyle,
  ];

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress} disabled={isDisabled} activeOpacity={0.8}>
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? C.gold : C.darkBrown} />
      ) : (
        <Text style={labelStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: { backgroundColor: C.darkBrown },
  outline: { backgroundColor: 'transparent', borderWidth: 1.5, borderColor: C.darkBrown },
  ghost: { backgroundColor: 'transparent' },
  disabled: { opacity: 0.6 },
  label: { fontSize: 16, fontWeight: '700' },
  labelPrimary: { color: C.gold },
  labelOutline: { color: C.darkBrown },
  labelGhost: { color: C.darkBrown },
});
