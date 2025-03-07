import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About'
import Menber from './components/Menber';
import Acutivity from './components/Activity';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <About />
      <Menber />
      <Acutivity />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
