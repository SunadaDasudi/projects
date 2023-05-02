import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {

  const [alertvisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertvisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>Button Name From App</Button>
    </div >
  );
}

export default App;
