import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../pages/Navigation';
import ContactFormSection from "@/pages/Contact.tsx";
import CustomCursor from "@/components/Cursor.tsx";

const MainLayout = () => {
  const location = useLocation();

  const enableScrollEffect = location.pathname === '/';
  const isWorksPage = location.pathname === '/works';
  console.log(`this is the work page ${isWorksPage}`);

  return (
    <div>
      <CustomCursor/>
      <Navigation BgColor={isWorksPage ? 'black' : undefined} />
      <Outlet />
      <ContactFormSection/>

    </div>
  );
};

export default MainLayout;
