import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
const VueCookie = require('vue-cookie');

Vue.config.productionTip = false
Vue.use(VueCookie);

new Vue({
  router,
  // store,

  render: h => h(App),
}).$mount('#app')