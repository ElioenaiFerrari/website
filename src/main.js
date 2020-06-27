import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from '@/router'
import theme from '@/plugins/theme'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  theme,
  render: h => h(App)
}).$mount('#app')