import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../pages/Navigation';

const MainLayout = () => {
  const location = useLocation();

  const enableScrollEffect = location.pathname === '/';
  const isWorksPage = location.pathname === '/works';
  console.log(`this is the work page ${isWorksPage}`);

  return (
    <div>
      <Navigation BgColor={isWorksPage ? 'black' : undefined} />
      <Outlet />
    </div>
  );
};

export default MainLayout;
