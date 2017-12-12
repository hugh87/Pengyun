<template>
  <li>
    {{ title }}
    <button v-on:click="$emit('remove')">X</button>
  </li>
</template>
<script>
export default {
  props: ['title'],
  created () {
    console.log('todo-list' + new Date())
  }
}
</script>