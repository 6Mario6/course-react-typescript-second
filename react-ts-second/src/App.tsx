import { useRef } from "react";
import Input from "./components/input";
import Form from "./components/Form";

function App() {
  return (
    <main>
      <Form>
        <Input type="text" label="Name" id="name"></Input>
        <Input type="number" label="Age" id="age"></Input>
        <p>
          <button>Save</button>
        </p>
      </Form>
    </main>
  );
}

export default App;
