import './styles/App.css';
import './styles/styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Accordion from './components/Accordion';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container col-lg-8 text-center">
        <div className="row justify-content-center mb-5">
          <Accordion />
        </div>
        <div className="row mb-4">
          <div className="col-1 col-md-3"></div>
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
