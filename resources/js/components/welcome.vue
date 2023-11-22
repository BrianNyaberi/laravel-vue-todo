<template>
  <div class="register-container">
    <h2 class="register-title">Register</h2>
    <form @submit.prevent="register" class="register-form">
      <input type="text" v-model="firstName" placeholder="First Name" />
      <input type="text" v-model="lastName" placeholder="Last Name" />
      <input type="text" v-model="organization" placeholder="Organization" />
      <input type="password" v-model="password" placeholder="Password" />
      <input type="password" v-model="confirmPassword" placeholder="Confirm Password" />
      <select v-model="userRole">
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      <button type="submit">Register</button>
      <h4>Already Registered? <router-link to="/login">Login</router-link></h4>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      organization: '',
      password: '',
      confirmPassword: '',
      userRole: 'user'
    };
  },
  methods: {
    register() {
        const userData = {
          firstName: this.firstName,
          lastName: this.lastName,
          organization: this.organization,
          password: this.password,
          confirmPassword: this.confirmPassword,
          userRole: this.userRole
        };

        axios.post('api/register', userData)
          .then(function(response) {
            const jsonResponse = {
              status: true,
              message: "Data saved correctly",
              data: response,
            };
          res.status(200).send(jsonResponse);
          })
          .catch(function(error) {
            res.status(500).send(`${error}`);
          });
    }
  }
};
</script>

<style>
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.register-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.register-form {
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
select,
button {
  margin: 5px 0;
  padding: 8px;
  width: 200px;
  border-radius: 3px;
  border: 1px solid #ccc;
}

button {
  cursor: pointer;
  background-color: #007bff;
  color: rgb(36, 34, 34);
  border: none;
}

button:hover {
  background-color: #0056b3;
}
</style>
