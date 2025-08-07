import { Outlet } from 'react-router-dom';
import Navigation from '../pages/Navigation.tsx';

const MainLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default MainLayout;
