import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import config from '~/config';
import Container from '~/Layouts/DefaulLayOut/Container';
import DefaulLayOut from '~/Layouts/DefaulLayOut/DefaulLayOut';
import Home from '~/pages/Home';
import ProfileUser from '~/pages/ProfileUser';
import './App.scss';
import Modal from './components/Cart/Modal';
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
            <Route path={config.routes.cart} element={<Modal />}></Route>
          </Routes>
        </DefaulLayOut>
      </div>
    </Router>
  );
}

export default App;
