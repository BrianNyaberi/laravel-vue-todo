<template>
    <div class="login-container">
      <h2 class="login-title">Org. TodoList Login</h2>
      <form @submit.prevent="login" class="login-form">
        <input type="text" v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {

        localStorage.setItem('loggedInUser', this.username);
        alert(`User ${this.username} logged in!`);
      }
    }
  };
  </script>
  
  <style>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .login-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  input[type="text"],
  input[type="password"],
  button {
    margin: 5px 0;
    padding: 8px;
    width: 200px;
    border-radius: 3px;
    border: 1px solid #ccc;
  }
  
  button {
    cursor: pointer;
    background-color: black;
    color: #1e2ad6;
    border: none;
  }
  
  button:hover {
    background-color: #333;
  }
  </style>
  