import { Authenticated, ErrorComponent, Refine, WelcomePage } from "@refinedev/core";
import { dataProvider } from "./Providers/data-providers";
import { ShowProduct } from "./Pages/ShowProducts";
import { EditProduct } from "./Pages/EditProducts";
import { CreateProduct } from "./Pages/CreateProducts";
import { ListProducts } from "./Pages/ListProducts";
import { authProvider } from "./Providers/auth-providers";
import { Login } from "./Pages/Login";
import { Header } from "./components/header/index";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ThemedHeaderV2, ThemedLayoutV2, ThemedSiderV2 } from "@refinedev/antd";
import { NavigateToResource } from "@refinedev/react-router-v6";
// import { ShowProducts } from "./Pages/ShowProduct";


function App() {
  return (
    <BrowserRouter>
      <Refine dataProvider={dataProvider}
        //  authProvider={authProvider}
        resources={[{ name: 'products', list: '/products' },
        { name: 'categories', list: 'categories' }]}
      >
        <Routes>
          <Route element={<ThemedLayoutV2 Header={() => <Header sticky />}
            Sider={(props) => <ThemedSiderV2 {...props} fixed />}
          >
            <Outlet />

          </ThemedLayoutV2>
          }>

            <Route index element={<NavigateToResource resource="/products" />} />
            <Route path="/product">
              <Route index element={<ListProducts />} />
            </Route>
            <Route path="*" element={<ErrorComponent />} />
          </Route>
        </Routes>
        {/* <WelcomePage /> */}
        {/* <ShowProduct/> */}
        {/* <EditProduct /> */}
        {/* <CreateProduct /> */}
        {/* <Authenticated key="protected" fallback={<Login />} >
    <Header />

      <ListProducts/>
    </Authenticated> */}
        {/* <ListProducts /> */}
      </Refine>
    </BrowserRouter>
  );
}

export default App;
