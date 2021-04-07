import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Products from "../views/Products.vue";
// import Product from "../views/Product.vue";
import Cart from "../views/Cart.vue";
import AddListing from "../components/AddListing.vue";
import ReviewListing from "../components/ReviewListing.vue";
import Signup from "../views/Signup.vue";
import store from "../store/index.js";
import Login from "../views/Login.vue";
import { DialogProgrammatic as Dialog } from "buefy";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/products",
    name: "products",
    component: Products,
  },
  // {
  //   path: "/products/:id",
  //   name: "product",
  //   component: Product,
  // },
  {
    path: "/addlisting",
    name: "addListing",
    component: AddListing,
  },
  {
    path: "/reviewListing",
    name: "reviewListing",
    component: ReviewListing,
    props: true,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// Protected Routes - Only can access on Login
const loginGuard = [
  "profile",
  "products",
  "product",
  "addListing",
  "reviewListing",
  "cart",
];

// Protected Routes - Only can access on Logout
const logoutGuard = ["signup", "login"];

router.beforeEach((to, from, next) => {
  if (!loginGuard.includes(to.name) || store.getters.isLoggedIn) return next();
  else {
    Dialog.alert({
      title: "Access Denied",
      message: "Please login before attempting to access this page.",
      type: "is-danger",
      hasIcon: true,
      icon: "exclamation-circle",
      iconPack: "fa",
      ariaRole: "alertdialog",
      ariaModal: true,
    });
    return next({ name: "home" });
  }
});

router.beforeEach((to, from, next) => {
  if (!logoutGuard.includes(to.name) || !store.getters.isLoggedIn)
    return next();
  return next({ name: "home" });
});

export default router;
