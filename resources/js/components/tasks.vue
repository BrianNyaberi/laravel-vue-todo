<template>
    <div class="landing-page">
      <h1>Welcome to the Todo List</h1>
      <div class="todo-list">
        <div v-for="(item, index) in todoItems" :key="index" class="todo-item" :class="{ 'hovered': index === hoveredIndex }" @mouseover="setHoveredIndex(index)">
          {{ item }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        todoItems: ['Task 1', 'Task 2'], // Sample todo items
        hoveredIndex: null
      };
    },
    methods: {
      setHoveredIndex(index) {
        this.hoveredIndex = index;
      }
    }
  };
  </script>
  
  <style>
  /* Add your desired styles */
  .landing-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  .todo-list {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
  
  .todo-item {
    padding: 10px;
    border: 1px solid #ccc;
    transition: background-color 0.3s ease;
  }
  
  .todo-item.hovered {
    background-color: #f0f0f0;
  }
  </style>
  