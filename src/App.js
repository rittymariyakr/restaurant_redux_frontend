import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RestView from './pages/RestView';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
     
     <Header/>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* here id is a parameter. so give full colon infront of id  for recognizing id as parameter */}
        <Route path='/restaurant_view/:id' element={<RestView/>}/>
      </Routes>
      
      <Footer/>
      
    </div>
  );
}

export default App;
