import { defineStore } from "pinia"

export const useTodoListStore = defineStore('todoList', {
    // state
    // getters
    // actions

    state() {
        return {
            todoList: [],
            id: 0
        }
    },
    actions: {
        addTodo(item) {
            this.todoList.push({
                item,
                id: this.id++,
                completed: false
            })
        },
        deleteTodo(itemId) {
            this.todoList = this.todoList.filter((todo) => {
                return todo.id !== itemId
            })
        },
        toggleCompleted(idToFind) {
            const todo = this.todoList.find((todo) => todo.id === idToFind)
            if (todo) {
                todo.completed = !todo.completed
            }
        }
    }
})