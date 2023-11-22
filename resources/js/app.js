import './bootstrap.js';

import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router';

import welcome from "./components/welcome.vue";
import login from "./components/login.vue";
import task from "./components/tasks.vue";

export default {
  components: {
    login,
    task
  }
};

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: welcome }, 
      { path: '/login', component: login },
      { path: '/task', component: task },
      //     { path: '/times', component: TimesPage, meta: { requiresAuth: true } }
      // Other routes...
    ],
  });

//   router.beforeEach((to, from, next) => {
//   // const isLoggedIn = /* Logic to check if the user is logged in */;
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!isLoggedIn) {
//       next('/');
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

const app = createApp({})
app.use(router);
app.component('welcome', welcome)
app.mount('#app')


