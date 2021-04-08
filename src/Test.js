import React from 'react';
import { useFormContext } from "react-hook-form";

function Test() {
  const methods = useFormContext();
  return <input {...methods.register("bill")} />;
}

export default Test
