import React from "react";

function AppFormPicker(props) {
  return (
    <>
      <AppTextInput
        icon="lock"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="password"
        secureTextEntry
        onBlur={() => {
          setFieldTouched("password");
        }}
        onChangeText={handleChange("password")}
      />
      <AppErrorMessage error={errors.password} visible={touched.password} />
    </>
  );
}

export default AppFormPicker;
