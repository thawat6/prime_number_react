import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import PrimeNumber from "./PrimeNumber";
import PrimeNumberCreate from "./PrimeNumberCreate";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<PrimeNumber />} />
        <Route path="create" element={<PrimeNumberCreate />} />
      </Routes>
    </div>
  );
}

export default App;
