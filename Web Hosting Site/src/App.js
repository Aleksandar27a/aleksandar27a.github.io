import {BrowserRouter as  Router,Routes,Route,useLocation} from 'react-router-dom'
import Navbar from './components/NavBar';
import './App.css';

import HomePage from './pages/Home';
import Packages from './pages/Packages';
import Help from './pages/Help';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';


function App() {
  const location = useLocation();
  const hideNavBars = ['/signin', '/signup']
  return (
    <div className="App">
      <>
       {/* Prikazuje Navbar samo ako trenutni pathname NIJE u hideNavBars */}
       {!hideNavBars.includes(location.pathname) && <Navbar />}

      
  
      <Routes>
        <Route path='/'  element={<HomePage/>}/>
        <Route path='/home'  element={<HomePage/>}/>
        <Route path='/packages' element={<Packages/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>

      </Routes>
 
      </>
 
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
