import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
// import { Main } from './components/Main/Main';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />

      <Outlet />

      {/* <Main /> */}

      <Footer />

    </div>
  );
}

export default App;
