import { Authenticated, ErrorComponent, Refine, WelcomePage } from "@refinedev/core";
import { dataProvider } from "./Providers/data-providers";
import { ShowProduct } from "./Pages/ShowProducts";
import { EditProduct } from "./Pages/EditProducts";
import { CreateProduct } from "./Pages/CreateProducts";
import { ListProducts } from "./Pages/ListProducts";
// import { ListProducts } from "./Pages/BlogPosts";
import { authProvider } from "./Providers/auth-providers";
import { Login } from "./Pages/Login";
import { Header } from "./components/header/index";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ThemedHeaderV2, ThemedLayoutV2, ThemedSiderV2 } from "@refinedev/antd";
import { NavigateToResource } from "@refinedev/react-router-v6";
import BlogPosts from "./Pages/BlogPosts";
import { DashboardOutlined, FontColorsOutlined, FormOutlined, ProductOutlined } from "@ant-design/icons";
import Dashboard from "./Pages/Dashboard";
// import { ShowProducts } from "./Pages/ShowProduct";


function App() {
  return (
    <BrowserRouter>
      <Refine dataProvider={dataProvider}
        //  authProvider={authProvider}
        resources={[
          {
            name: 'Dashboard', list: '/dashboard', meta: {
              canDelete: true,
              icon: <DashboardOutlined />
            }
          },
          {
            name: 'products',
            show: 'products/:id',
            list: '/products',
            create: '/products/create',
            edit: '/products/:id/edit',
            meta: {
              canDelete: true,
              icon: <FormOutlined />
            }
          },
          {
            name: 'categories', list: 'categories', meta: {
              canDelete: true,
              icon: <ProductOutlined />
            }
          }, {
            name: 'Blog Posts', list: '/blog', meta: {
              canDelete: true,
              icon: <FontColorsOutlined />
            }
          },
        
         
        ]}
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
              {/* <Route path="create" element={<Categ />} */}
            </Route>
            <Route path="/blog">
              <Route index element={<BlogPosts />} />
            </Route>
            <Route path="/dashboard">
              <Route index element={<Dashboard />} />
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
