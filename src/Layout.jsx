import { div } from "framer-motion/client";
import Home from "./components/Home";
import Navigation from "./components/Naviagtion";
import { Outlet } from 'react-router-dom'



const Layout = () => {
    return ( 
       <>
          <Navigation/>
          <Outlet/>
       </>
     );
}
 
export default Layout;