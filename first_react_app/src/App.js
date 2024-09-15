import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import UserCard from './components/UserCard';
import { Outlet } from 'react-router-dom';



function App() {

  return (
   <>
   <Outlet/>
   </>
  );
}
export default App;
