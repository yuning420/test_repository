import Vue from 'vue'
import App from './App.vue'

import store from './store'    //加這行

new Vue({

  store,    //加這行

  el: '#app',
  render: h => h(App)
})
