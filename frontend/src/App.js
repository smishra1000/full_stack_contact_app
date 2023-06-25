import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './components/Header';
import CreateContact from './components/CreateContact';
import Login from './components/Login';
import Signup from './components/Signup';
import EditContact from './components/EditContact';
import Counter from './components/Counter';


function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/allcontacts" element={<Contacts/>}></Route>
        <Route path="/addcontact" element={<CreateContact/>}></Route>
        <Route path="/editcontact/:id" element={<EditContact/>}></Route>
        <Route path="/counter" element={<Counter/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
