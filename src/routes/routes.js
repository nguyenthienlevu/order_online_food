import config from '~/config';
import Home from '~/pages/Home';
import ProfileUser from '~/pages/ProfileUser';
// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.profilrUser, component: ProfileUser },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
