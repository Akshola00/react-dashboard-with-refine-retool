import {  Refine, WelcomePage } from "@refinedev/core";
import { dataProvider } from "./Providers/data-providers";
import { ShowProduct } from "./Pages/ShowProducts";
import { EditProduct } from "./Pages/EditProducts";
// import { ShowProducts } from "./Pages/ShowProduct";


function App() {
  return (
   <Refine dataProvider={dataProvider} > 
    {/* <WelcomePage /> */}
    {/* <ShowProduct/> */}
    <EditProduct />
   </Refine>
  );
}

export default App;
