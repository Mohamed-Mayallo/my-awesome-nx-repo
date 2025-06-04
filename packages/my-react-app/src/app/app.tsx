import { Button } from '@my-awesome-nx-repo/shared-ui'; // Import our shared button

export function App() {
  const handleClick = () => {
    alert('Button clicked from shared library!');
  };

  return (
    <div>
      <h1>Welcome to my-react-app!</h1>
      <Button text="Click Me" onClick={handleClick} />{' '}
      {/* Use the shared button */}
      <p>This button comes from a shared library.</p>
    </div>
  );
}

export default App;
