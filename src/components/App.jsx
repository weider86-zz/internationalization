import React, { Suspense } from "react";
import { Main } from "./Main";

export const App = () => {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <Main />
      </div>
    </Suspense>
  );
};
