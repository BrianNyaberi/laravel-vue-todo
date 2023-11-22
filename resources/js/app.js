import './bootstrap.js';

import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router';

import welcome from "./components/welcome.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: welcome },
      // Other routes...
    ],
  });

const app = createApp({})
app.use(router);
app.mount('#app')



// import Login from './components/Login.vue';
// import TimesPage from './components/TimesPage.vue';
// import addItemForm from './addItemForm';
// import listView from './listView';

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

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app');
