//import pages
import Home from "./pages/Home"
import Pokemon from "./pages/Pokemon"
//import styles
import './App.css';
//import router
import { Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />}>

        </Route>

        <Route path="/pokemon/:pokeName" element={<Pokemon/>}>

        </Route>
      </Routes>

      <Outlet />
    </div>
  );
}

export default App;
