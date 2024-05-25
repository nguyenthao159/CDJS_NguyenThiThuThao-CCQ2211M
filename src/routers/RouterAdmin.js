import Category from "../pages/backend/Category";
import Product from "../pages/backend/Product";
import Banner from "../pages/backend/Banner";
import Brand from "../pages/backend/Brand";
import Menu from '../pages/backend/Menu';
import Order from "../pages/backend/Order";
import OrderDetail from "../pages/backend/OrderDetail";
import Post from "../pages/backend/Post";
import Topic from "../pages/backend/Topic";
import User from "../pages/backend/User";
const RouterAdmin =[
    {
        path: "product",
        element: <Product/>,
    },
    {
        path: "category",
        element: <Category/>,
    },
    {
        path: "banner",
        element:<Banner/>
    },
    {
        path:"brand",
        element:<Brand/>,
    },
    {
        path:"menu",
        element:<Menu/>,
    },
    {
        path:"order",
        element:<Order/>,
    },
    {
        path:"orderdetail",
        element:<OrderDetail/>,
    },
    {
        path:"post",
        element:<Post/>,
    },
    {
        path:"topic",
        element:<Topic/>,
    },
    {
        path:"user",
        element:<User/>,
    }

];
export default RouterAdmin;