import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebaseConfig from './config/firebase'
import firebase from 'firebase'
import VCharts from 'v-charts'


Vue.use(VCharts)
Vue.use(Vuetify)

Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
