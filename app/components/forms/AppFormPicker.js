import { useFormikContext } from 'formik';
import React from 'react';
import AppPicker from '../AppPicker';
import AppErrorMessage from './AppErrorMessage';

function AppFormPicker({
  items,
  name,
  PickerItemComponent,
  numberOfColumns,
  placeholder,
  width,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => {
          setFieldValue(name, item);
        }}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
