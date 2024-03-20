import logo from './bmw.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando estilos do Bootstrap
import Carousel from 'react-bootstrap/Carousel'; // Importando componente de carrossel do Bootstrap

function App() {
  return (
    <div className="App">
      <div id='titulo'>
        <div className="logo-container">
          <img src={logo} className="App-logo" alt="logo" /> {/* Logo */}
        </div>
        <button>Registrar</button> {/* Botão de registro */}
      </div>

      <nav id='navbar'> {/* Barra de navegação */}
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#carros">Carros</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      <div className="container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
