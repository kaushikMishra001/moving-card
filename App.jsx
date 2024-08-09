import React from "react";
import Background from "./componets/Background";
import Fourground from "./componets/Fourground";

function App() {
  return (
    <div className="relative h-screen w-full bg-zinc-700">
      <Background />
      <Fourground />
    </div>
  );
}

export default App;
