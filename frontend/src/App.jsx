import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from 'axios';
import {Toster} from 'react-hot-toast'

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {

  return (
    <>
    <Navbar/>
    <Toster position='bottom-right' toastOptions={{duration:2000}}/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />

    </Routes>
    </>
  )
}

export default App
