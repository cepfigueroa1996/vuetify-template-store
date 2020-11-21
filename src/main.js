import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VCharts from 'v-charts'

Vue.use(VCharts)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  VCharts,
  render: h => h(App)
}).$mount('#app')
