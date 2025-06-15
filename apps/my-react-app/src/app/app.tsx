import { Button } from '@my-awesome-nx-repo/shared-ui'; // Import our shared button
import './app.module.css';

export function App() {
  const handleClick = () => {
    alert('Button clicked from shared library!');
  };

  return (
    <div>
      <h1>Welcome to my-react-app!</h1>
      {/* Use the shared button */}
      <Button text="Click Me" onClick={handleClick} />
      <p>This button comes from a shared library.</p>
    </div>
  );
}

export default App;
