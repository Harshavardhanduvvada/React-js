import React from "react";

function App() {
  const array = ["harsha", "shoukath", "anusha", "goutham", "kishore"];
  return (
    <div>
      {array.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </div>
  );
}
export default App;
