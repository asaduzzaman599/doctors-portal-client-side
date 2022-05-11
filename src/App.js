import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import AppointmentSection from './Pages/AppointmentSection/AppointmentSection';


function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<AppointmentSection></AppointmentSection>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
