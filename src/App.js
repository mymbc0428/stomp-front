import './App.css';
import { Routes, Route } from 'react-router-dom'
import Rooms from "./rooms";
import Roomdetail from "./roomdetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/rooms'} element={<Rooms/>} />
        <Route path={'/chat/room/:id'} element={<Roomdetail />} />
      </Routes>
    </div>
  );
}

export default App;
