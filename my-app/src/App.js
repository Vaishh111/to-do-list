import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navabar';
import Maincomp from './components/Maincomp';

function App() {
  return (
   <>
    <Navbar />
    <Maincomp text="text 1" rot={false}/>
    <Maincomp text="text 2" rot={true}/>




   </>
  );
}

export default App;
