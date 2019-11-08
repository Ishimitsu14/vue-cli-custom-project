import EmptyLayout from './layouts/Empty'
import MainLayout from './layouts/Main'
import App from './App';
import store from './stores';
import router from './router';
import Vue from 'vue';

/**
 * Set global plugins
 */
/**
 * Set global component
 */
Vue.component('empty-layout', EmptyLayout)
Vue.component('main-layout', MainLayout)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
