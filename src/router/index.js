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
    path: '/ProductList',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/products/:id',
    name: 'product',
    component: Product,
  },
    path: '/addlisting',
    name: 'Add Listing',
    component: AddListing
  },
  {
    path: '/reviewListing',
    name: 'Review Listing',
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
