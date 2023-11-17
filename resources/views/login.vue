<template>
    <div>
      <!-- Your login form here -->
      <form @submit.prevent="login">
        <!-- Login form fields -->
        <input type="text" v-model="username" />
        <input type="password" v-model="password" />
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
        // Logic to handle login and authentication
        // Once authenticated, navigate to '/times'
        this.$router.push('/times');
      }
    }
  };
  </script>
  