import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../pages/Navigation';

const MainLayout = () => {
  const location = useLocation();

  const enableScrollEffect = location.pathname === '/';

  return (
    <div>
      <Navigation  />
      <Outlet />
    </div>
  );
};

export default MainLayout;
