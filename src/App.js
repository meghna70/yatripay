import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Features from './pages/Features';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/forgotPassword" element={<ForgotPassword/>} /> 
      <Route path ="/feature" element={<Features/>}/>
    </Routes>
  );
}

export default App;
