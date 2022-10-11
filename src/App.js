import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import config from '~/config';
import DefaulLayOut from '~/Layouts/DefaulLayOut/DefaulLayOut';
import Home from '~/pages/Home';
import ProfileUser from '~/pages/ProfileUser';
import './App.scss';
import Cart from './components/Cart/Cart';
function App() {
  return (
    <Router>
      <div className="App">
        <DefaulLayOut>
          <Routes>
            <Route path={config.routes.home} element={<Home />}></Route>
            <Route
              path={config.routes.profileUser}
              element={<ProfileUser />}
            ></Route>
            <Route path={config.routes.cart} element={<Cart />}></Route>
          </Routes>
        </DefaulLayOut>
      </div>
    </Router>
  );
}

export default App;
