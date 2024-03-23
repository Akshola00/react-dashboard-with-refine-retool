import {  Authenticated, Refine, WelcomePage } from "@refinedev/core";
import { dataProvider } from "./Providers/data-providers";
import { ShowProduct } from "./Pages/ShowProducts";
import { EditProduct } from "./Pages/EditProducts";
import { CreateProduct } from "./Pages/CreateProducts";
import { ListProducts } from "./Pages/ListProducts";
import { authProvider } from "./Providers/auth-providers";
import { Login } from "./Pages/Login";
import { Header } from "./components/header/index";
// import { ShowProducts } from "./Pages/ShowProduct";


function App() {
  return (
   <Refine dataProvider={dataProvider} authProvider={authProvider} > 
    {/* <WelcomePage /> */}
    {/* <ShowProduct/> */}
    {/* <EditProduct /> */}
    {/* <CreateProduct /> */}
    <Authenticated key="protected" fallback={<Login />} >
    <Header />

      <ListProducts/>
    </Authenticated>
    {/* <ListProducts /> */}
   </Refine>
  );
}

export default App;
