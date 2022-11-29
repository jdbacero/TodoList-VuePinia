import { defineStore } from "pinia"

export const useTodoListStore = defineStore('todoList', {
    // state
    // getters
    // actions

    state() {
        return {
            todoList: []
        }
    }
})