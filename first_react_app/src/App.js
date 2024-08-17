import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar title="App Title"/>
      </header>
    </div>
  );
}
export function Title(){
  return(
    <div>
      <h1>title</h1>
    </div>


  );
}
export default App;
