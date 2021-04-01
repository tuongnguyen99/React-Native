import { useFormikContext } from 'formik';
import React from 'react';
import ImageInputList from '../ImageInputList';
import AppErrorMessage from './AppErrorMessage';

function FormImagePicker({ name }) {
  const { values, errors, touched, setFieldValue } = useFormikContext();

  const handleAddImage = (uri) => {
    if (values[name].includes(uri)) return alert('photo is duplicated');
    setFieldValue(name, [...values[name], uri]);
  };

  const handleRemoveImage = (uri) => {
    setFieldValue(
      name,
      values[name].filter((imgUri) => {
        return imgUri !== uri;
      })
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
