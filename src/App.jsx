import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screen/Home/Home';
import Confirm from './screen/Confirm/Confirm';
import Error from './screen/error/Error';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './screen/AuthPages/Login';
import SignUp from './screen/AuthPages/SignUp';
import ResetPassword from './screen/AuthPages/ResetPassword';
import VerifyOtp from './screen/AuthPages/VerifyOtp';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confirm" element={<ProtectedRoute element={<Confirm />}/>} />
        <Route path="/*" element={<Error />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/forgot-password' element={<ResetPassword/>}/>
        <Route path='/verify-otp' element={<VerifyOtp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
