import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./layoutStyle.css"
import {useRoutes} from "react-router-dom";
import LayoutSite from "./layouts/LayoutSite";
import NoPage from "./pages/NoPage";
import RouterApp from "./routers";
import LayoutAdmin from "./layouts/LayoutAdmin";


function App(){
  let element = useRoutes([
    {
      path: "/",
      element: <LayoutSite />,
      children: RouterApp.RouterSite,
    },
    { path: "/admin",
     element: <LayoutAdmin/> ,
     children: RouterApp.RouterAdmin,
    },
    {
      path: "*",
      element: <NoPage/>
    }
  ]);

  return element;
}
export default App;