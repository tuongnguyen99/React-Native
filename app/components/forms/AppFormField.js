import { useFormikContext } from "formik";
import React from "react";
import AppErrorMessage from "./AppErrorMessage";
import AppTextInput from "../AppTextInput";

function AppFormField({name, ...props}) {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => {
          setFieldTouched(name);
        }}
        onChangeText={handleChange(name)}
        {...props}
      />
      <AppErrorMessage error={errors[name]} visible={touched.email} />
    </>
  );
}

export default AppFormField;
