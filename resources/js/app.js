import './bootstrap.js';

import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router';

import welcome from "./components/welcome.vue";
import login from "./components/login.vue";
import task from "./components/tasks.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: welcome }, 
      { path: '/login', component: login },
      { path: '/task', component: task },
      // Other routes...
    ],
  });

const app = createApp({})
app.use(router);
app.component('welcome', welcome)
app.mount('#app')

// export default {
//   components: {
//     addItemForm,
//     listView
//   }
// };

// const router = new VueRouter({
//   routes: [
//     { path: '/', component: Login },
//     { path: '/times', component: TimesPage, meta: { requiresAuth: true } }
//   ]
// });

// router.beforeEach((to, from, next) => {
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

