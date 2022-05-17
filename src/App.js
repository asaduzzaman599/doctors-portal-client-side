import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import AppointmentSection from './Pages/AppointmentSection/AppointmentSection';
import Login from './Pages/Auth/Login';
import SignUp from './Pages/Auth/SignUp';
import RequiredAuth from './Pages/Auth/RequiredAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReviews from './Pages/Dashboard/MyReviews';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequiredAdmin from './Pages/Auth/RequiredAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import AllDoctors from './Pages/Dashboard/AllDoctors';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={
          <RequiredAuth>
            <AppointmentSection></AppointmentSection>
          </RequiredAuth>
        }></Route>
        <Route path='/dashboard' element={<RequiredAuth><Dashboard></Dashboard></RequiredAuth>}>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='myappointments' element={<MyAppointments></MyAppointments>}></Route>
          <Route path='myreviews' element={<MyReviews></MyReviews>}></Route>
          <Route path='users' element={<RequiredAdmin><AllUsers></AllUsers></RequiredAdmin>}></Route>
          <Route path='adddoctors' element={<RequiredAdmin><AddDoctor></AddDoctor></RequiredAdmin>}></Route>
          <Route path='alldoctors' element={<RequiredAdmin><AllDoctors></AllDoctors></RequiredAdmin>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
