import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import AppointmentSection from './Pages/AppointmentSection/AppointmentSection';
import Login from './Pages/Auth/Login';
import SignUp from './Pages/Auth/SignUp';


function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<AppointmentSection></AppointmentSection>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
