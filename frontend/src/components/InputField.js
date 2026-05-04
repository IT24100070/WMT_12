/**
 * InputField.js
 * Labeled text input with optional error state.
 */
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const C = {
  darkBrown: '#3d2b1f',
  lightGray: '#e8e0d5',
  textGray: '#6b6b6b',
  error: '#b00020',
};

export default function InputField({
  label,
  value,
  onChangeText,
  error,
  placeholder,
  secureTextEntry,
  keyboardType,
  autoCapitalize = 'sentences',
  editable = true,
  multiline = false,
  numberOfLines,
  style,
}) {
  return (
    <View style={[styles.wrapper, style]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        style={[
          styles.input,
          error && styles.inputError,
          !editable && styles.inputDisabled,
          multiline && styles.inputMultiline,
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={C.textGray}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        editable={editable}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: 14 },
  label: { fontSize: 13, fontWeight: '600', color: C.darkBrown, marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: C.lightGray,
    padding: 13,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#fff',
    color: C.darkBrown,
  },
  inputError: { borderColor: C.error },
  inputDisabled: { backgroundColor: '#f0ece4', color: C.textGray },
  inputMultiline: { minHeight: 80, textAlignVertical: 'top' },
  errorText: { color: C.error, fontSize: 12, marginTop: 4 },
});
