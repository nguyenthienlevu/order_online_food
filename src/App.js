import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './config/routes';
import Container from './Layouts/Container';
import Footer from './Layouts/Footer';
import Header from './Layouts/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Container></Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
