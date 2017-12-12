<template>
    <div id="todo-list">
        <input type="text" v-model="newTodoText" v-on:keyup.enter="addNewTodo" placeholder="Add a todo">
        <ul>
            <li is="todo-list" v-for="(todo, index) in todos" v-bind:title="todo" v-on:remove="todos.splice(index, 1)"></li>
        </ul>
    </div>
</template>
<script>
import TodoList from 'components/TodoList'
export default {
  name: 'todo',
  data () {
    return {
      newTodoText: '',
      todos: [
        'Do the dishes',
        'Take out the trash',
        'Mow the lawn'
      ]
    }
  },
  methods: {
    addNewTodo: function () {
      this.todos.push(this.newTodoText)
      this.newTodoText = ''
    }
  },
  components: {
    TodoList
  }
}
</script>