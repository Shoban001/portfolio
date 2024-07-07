import React, { Suspense } from "react";
import Loader from "./Layout/Loader";
const Routers = React.lazy(() => import('./Routes'));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<Loader/>}>
        <Routers/>
      </Suspense>
    </div>
  );
}

export default App;
