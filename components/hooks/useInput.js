import { useState } from "react";

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  function onChangeText(e) {
    setValue(e);
  }
  return { value, onChangeText };
}

export default useInput;
