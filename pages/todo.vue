<template>
  <div>
    <Navbar />
    <div class="text-center">
      <h2>Todos</h2>
      <input placeholder="What needs to be done?" @keyup.enter="addTodo">
      <p v-for="(todo, index) in todos" :key="index">
        <input :checked="todo.done" type="checkbox" @change="toggle(todo)">
        <span :class="{ done: todo.done }">
          {{ todo.text }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import Navbar from '../components/Navbar'
export default {
  components: {
    Navbar
  },
  computed: mapGetters({
    todos: 'todos/todos'
  }),
  methods: {
    addTodo (e) {
      const text = e.target.value
      if (text.trim()) {
        this.$store.commit('todos/add', { text })
      }
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
