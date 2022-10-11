import '../App.css';
import { useEffect } from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import AddContact from './AddContact';
import EditContact from './EditContact';
import PageError from './PageError';
import Navbar from './Navbar';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import {  useDispatch } from 'react-redux';


// App component
function App() {
  // Initialize dispatch variable
  const dispatch = useDispatch();
  useEffect(()=>{
    // Function to fetch the contacts from the API
    const getContactsData = async()=>{
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(res.data);
      dispatch({type:'GETCONTACTS',payload:res.data});
    }
    getContactsData();
  },[]);
  return (
          <BrowserRouter>
            <ToastContainer/>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/addContact' element={<AddContact/>}/>
              <Route path='/edit/:id' element={<EditContact />}/>
              <Route path='*' element={<PageError/>}/>
            </Routes>
      </BrowserRouter>
   
  );
}

export default App;
