import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"
import Resource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(Resource)

//pages
import Foo from './pages/foo.vue'
import Bar from './pages/bar.vue'

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')