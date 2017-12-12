<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <h2><span>my watch</span></h2>
    <watch></watch>
    <h2><span>my todo</span></h2>
    <todo></todo>
    <h2><span>my list</span></h2>
    <list></list>
  </div>
</template>

<script>
import Hello from './components/Hello'
import List from './components/List'
import Watch from './components/Watch'
import Todo from './components/Todo'

export default {
  name: 'app',
  components: {
    Hello,
    Watch,
    List,
    Todo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h2 span{
  border-bottom:2px solid #42b983;
}
</style>
