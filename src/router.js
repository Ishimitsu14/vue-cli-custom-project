import HomeRoute from './routes/main'

// Errors pages
import NotFound from './routes/not-found'

import {sync} from 'vuex-router-sync'
import store from './stores'

import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        HomeRoute,
        NotFound
    ]
})

sync(store, router)
router.beforeEach((to, from, next) => {
    const isCheckAuth = to.matched.some(record => record.meta.requiresAuth)
    const isUserAuth = store.getters.isAuthenticated

    if (isCheckAuth && !isUserAuth) {
        next('/')
    }

    next()
});

export default router
