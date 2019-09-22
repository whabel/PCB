import Vue from 'vue'
import App from './App'
import router from './router'
import {VueMasonryPlugin} from 'vue-masonry';

Vue.config.productionTip = false
Vue.use(VueMasonryPlugin)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
