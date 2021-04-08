import './App.css';
import { useForm, FormProvider } from "react-hook-form";
import Test from "./Test";

function App() {
  const methods = useForm();
  const { register, handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <p>Check console log</p>
        <label>Test</label>
        <input {...register("test", { required: true })} />
        <label>Nested Input</label>
        <Test />
        <input type="submit" />
      </form>
    </FormProvider>
  );
}

export default App;
