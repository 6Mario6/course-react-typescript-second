import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/input";

function App() {
  return (
    <main>
      <Input id="name" label="Your name"></Input>
      <Input id="age" label="Your age"></Input>
      <p>
        <Button>A button</Button>
      </p>
      <p>
        <Button href="">A Link</Button>
      </p>
      <Container as={Button}>Click me</Container>
    </main>
  );
}

export default App;
