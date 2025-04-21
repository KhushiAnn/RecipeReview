import { useState } from 'react';

function useForm(initialValues, onSubmit) {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors({}); // Reset errors on submit

    // Basic validation example
    const validationErrors = {};
    for (const key in initialValues) {
      if (values[key] === undefined || values[key] === '') {
        validationErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`;
      }
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    if (onSubmit) {
      await onSubmit(values);
    }
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setValues, // Optionally expose setValues for more control
    setErrors,   // Optionally expose setErrors for external validation
  };
}

export default useForm;