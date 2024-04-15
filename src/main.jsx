import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import NavBar from "./components/NavBar.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ProductsListPage from "./pages/ProductsListPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import ShoppingCardPage from "./pages/ShoppingCardPage.jsx";
import RentalPage from "./pages/RentalPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/contact", element: <ContactPage /> },
      {
        path: "/products",
        element: <ProductsListPage />,
      },
      { path: "products/:productId", element: <ProductDetailPage /> },
      { path: "/shopping-cart", element: <ShoppingCardPage /> },
      { path: "/rental", element: <RentalPage /> },
      { path: "/projects", element: <ProjectsPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
