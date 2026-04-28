import './App.css';
import Navbar from"./components/Navbar";
 import 'bootstrap/dist/css/bootstrap.css';
 import Register from './Pages/Register';
 import { Route,Routes} from 'react-router-dom';
 import Home from "./Pages/Home";
 import About from './Pages/About';
 import Login from './Pages/Login';

 import Doctors  from'./Pages/Doctors';
 import Myprofile from "./Pages/Myprofile ";
 import Myappointments from './Pages/Myappointments';
 import Header from './components/Header';
import Appointment from './Pages/Appointment';
import Footer from './components/Footer';
import { AppContextProvider } from "./Context/AppContext";
import Payment from"./Pages/Payment";
import Contactus from './Pages/Contact us';

const App= () => {

  return (
    <AppContextProvider>
    <div className='mb-4'>



<Navbar/>


<Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contactus" element={<Contactus/>}/>
          <Route path="/Register" element={<Register/>}/>
         <Route path="/Doctors/:Speciality" element={<Doctors/>}/>
          <Route path ="/Doctors" element={<Doctors/>} />
          <Route path='/Login' element={<Login/>}/>
          <Route path ="/profile" element={<Myprofile/>}/>
          <Route path="/Myappointments/doc/:docid" element={<Myappointments />} />
          <Route path="/Header" element={<Header/>}/>
          <Route path="/Appointment/doc/:docid" element={<Appointment />} />
          <Route path="/payment/:docid" element={<Payment />} />
           </Routes>

        
<Footer/>
          </div>
   </AppContextProvider>

  );
};

export default App;
