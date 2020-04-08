import Vue from 'vue'
import App from './App.vue'

// global nesting
// import Ninjas from "./Ninja";
//
// Vue.component('ninjas', Ninjas);
export const bus = new Vue();
new Vue({
  el: '#app',
  render: h => h(App)
})
