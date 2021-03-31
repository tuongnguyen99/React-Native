import { useFormikContext } from "formik";
import React from "react";
import AppErrorMessage from "./AppErrorMessage";
import AppTextInput from "../AppTextInput";


function AppFormField({name, width, ...props}) {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => {
          setFieldTouched(name);
        }}
        onChangeText={handleChange(name)}
        width={width}
        {...props}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
