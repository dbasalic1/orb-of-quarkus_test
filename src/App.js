import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Router from './router/Router';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Header />
      <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
