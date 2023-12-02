import { useState } from "react";
import DefaultPage from "./pages/DefaultPage/DefaultPage";

function App() {
  const [showDefaultPage, setShowDefaultPage] = useState<boolean>(true);

  return (
    <>
      {showDefaultPage && (
        <DefaultPage setShowDefaultPage={setShowDefaultPage} />
      )}
    </>
  );
}

export default App;
