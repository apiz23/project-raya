import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import First from './Pages/First';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<First />} />
      </Routes>
    </div>
  );
}