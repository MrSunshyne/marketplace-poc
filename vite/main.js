import { createApp } from 'vue'
import './main.css'
import App from './App.vue'
import { routes } from '/routes.js'
import store from './store.js'
import { createRouter, createWebHistory } from 'vue-router'

let app = createApp(App)
let router = createRouter({
  history: createWebHistory(),
  routes: __DEV__ ? [] : routes,
})

if (import.meta.hot) {
  let removeRoutes = []

  for (let route of routes) {
    removeRoutes.push(router.addRoute(route))
  }

  import.meta.hot.acceptDeps('./routes.js', ({ routes }) => {
    for (let removeRoute of removeRoutes) removeRoute()
    removeRoutes = []
    for (let route of routes) {
      removeRoutes.push(router.addRoute(route))
    }
    router.replace('')
  })
}

app.use(router)
app.use(store)

app.mount('#app')
 