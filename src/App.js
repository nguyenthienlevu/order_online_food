import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import config from '~/config';
import Home from '~/pages/Home';
import ProfileUser from '~/pages/ProfileUser';
import ProductDetail from './components/ShopFood/CardProduct/ProductDetail/ProductDetail';
import './App.scss';
function App() {
  return (
    <Router>
      <div className="App">
        {/* <DefaulLayOut> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path={config.routes.profileUser}
            element={<ProfileUser />}
          ></Route>
          <Route path="cart/:id" element={<ProductDetail />}></Route>
        </Routes>
        {/* </DefaulLayOut> */}
      </div>
    </Router>
  );
}

export default App;
