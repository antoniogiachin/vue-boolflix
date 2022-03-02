import "bootstrap/dist/css/bootstrap.min.css"

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'



import Vue from 'vue'

import CountryFlag from 'vue-country-flag'

Vue.component('country-flag', CountryFlag)

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import "bootstrap/dist/js/bootstrap.js"