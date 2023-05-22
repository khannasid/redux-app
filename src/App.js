import './App.css';
import { Provider } from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './pages/Cart';
import store from './store/store';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
        <Navbar/>
            <Routes>
              <Route path='/' element= {<Home/>}></Route>
              <Route path='/cart' element= {<Cart/>}></Route>
            </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
