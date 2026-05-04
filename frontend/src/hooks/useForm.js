/**
 * useForm.js
 * Lightweight form state hook with validation support.
 * Usage:
 *   const { values, handleChange, handleSubmit, errors, submitting } = useForm(
 *     { email: '', password: '' },
 *     validate,
 *     onSubmit
 *   );
 */
import { useState, useCallback } from 'react';

export function useForm(initialValues, validate, onSubmit) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = useCallback((field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }, [errors]);

  const handleSubmit = useCallback(async () => {
    if (submitting) return;
    if (validate) {
      const validationErrors = validate(values);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
    }
    setSubmitting(true);
    try {
      await onSubmit(values);
    } finally {
      setSubmitting(false);
    }
  }, [values, validate, onSubmit, submitting]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { values, errors, submitting, handleChange, handleSubmit, reset };
}
