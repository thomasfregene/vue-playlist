import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

//filters
Vue.filter('snippet', function(value){
  return value.slice(0, 100) + "..."
})

new Vue({
  el: '#app',
  render: h => h(App)
})
