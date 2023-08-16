import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import MyForm from './components/form';
import Signin from './components/signin';
import Signup from './components/signup';
import MyNavbar from './components/Navbar';
import CardPage from './components/Card';
import Signout from './components/Signout';
import { useFirebase } from './context/context';

function App() {
  const firebase = useFirebase();
  if(firebase.isLoggedIn) {
  return (
    <div className="App">
      < MyNavbar />
      <Routes>
      <Route path='/signin' element={<Signin />} />
      <Route path='/survey/form' element={<MyForm />} />
      <Route path='/' element={<Signup /> } />
      <Route path='/survey/details' element={< CardPage /> } />
      <Route path='/signout' element={< Signout /> } />
      </Routes>
    </div>
  ); 
  }
  else {
    return (
      <div className="App">
    < MyNavbar />
    <Routes>
    <Route path='/signin' element={<Signin />} />
    <Route path='/' element={<Signup /> } />

    </Routes>
    </div>
    )
  }
}

export default App;
