import Vue from 'vue'
import App from './App'

// Vue.component('todo-item', {
//   template: '\
//     <li>\
//       {{ title }}\
//       <button v-on:click="$emit(\'remove\')">X</button>\
//     </li>\
//   ',
//   props: ['title']
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
