import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import ProductList from '../views/ProductList.vue'
import Product from '../components/Product.vue'
import AddListing from '../components/AddListing.vue'
import ReviewListing from '../components/ReviewListing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/productList',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/products/:id',
    name: 'Product',
    component: Product,
  },
  {
    path: '/addlisting',
    name: 'AddListing',
    component: AddListing
  },
  {
    path: '/reviewListing',
    name: 'ReviewListing',
    component: ReviewListing,
    props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
