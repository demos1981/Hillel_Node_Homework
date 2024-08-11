import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import BasketPage from "../pages/BasketPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import RegistrPage from "../pages/RegistrPage";
import ProductList from "../components/ProductList";
import AddProduct from "../components/AddProduct";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import DeliveryPage from "../pages/DeliveryPage";
import PaymentsPage from "../pages/PaymentsPage";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_ROUTE,
  REGISTRATION_ROUTE,
  PRODUCT_LIST_ROUTE,
  PRODUCT_ADD,
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
  DELIVERY_ROUTE,
  PAYMENTS_ROUTE,
} from "../utils/consts";

export const authRoutes = [
  {
    path: BASKET_ROUTE,
    component: BasketPage,
  },
];

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    component: HomePage,
  },
  {
    path: LOGIN_ROUTE,
    component: AuthPage,
  },
  {
    path: PRODUCT_ROUTE + "/:id",
    component: ProductPage,
  },
  {
    path: REGISTRATION_ROUTE,
    component: RegistrPage,
  },
  {
    path: PRODUCT_LIST_ROUTE,
    component: ProductList,
  },
  {
    path: PRODUCT_ADD,
    component: AddProduct,
  },
  {
    path: ADMIN_ROUTE,
    component: AdminPage,
  },
  {
    path: ABOUT_ROUTE,
    component: AboutPage,
  },
  {
    path: CONTACTS_ROUTE,
    component: ContactPage,
  },
  {
    path: DELIVERY_ROUTE,
    component: DeliveryPage,
  },
  {
    path: PAYMENTS_ROUTE,
    component: PaymentsPage,
  },
];
