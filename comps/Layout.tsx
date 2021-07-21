import Footer from "./Footer";
import Navbar from "./Navbar";
import { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <div className='content'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
