<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-bind:title="message">Hover your mouse over me for a few seconds to see my dynamically bound title!</h2>
    <ul>
        <li v-for="item in website"><a v-bind:href="item.name" target="_blank">{{item.name}}</a></li>
        <br>
        <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: 'You loaded this page on ' + new Date(),
      seen: true,
      website: [
        {name: 'Core Docs', url: 'https://vuejs.org'},
        {name: 'Forum', url: 'https://forum.vuejs.org'},
        {name: 'Gitter Chat', url: 'https://gitter.im/vuejs/vue'},
        {name: 'Twitter', url: 'http://twitter.com/vuejs'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
