import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { Routes, Route} from "react-router-dom";
import LogIn from './Components/LogIn';
import Details from './Components/Details';
import Error from './Components/Error';

function App() {
  return (
   <>
   <Header/>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/LogIn" element={<LogIn />} />
   <Route path="/Details" element={<Details />} />
   <Route path="*" element={<Error/>} />
   </Routes>
   </>
  );
}

export default App;
