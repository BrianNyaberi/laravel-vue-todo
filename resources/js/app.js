import './bootstrap.js';

import { createApp } from "vue";
import welcome from "./components/welcome.vue";

const app = createApp({})
app.component('welcome', welcome)
app.mount('#app')


// import App from "./vue/app";
// import VueRouter from 'vue-router';

// import Login from './components/Login.vue';
// import TimesPage from './components/TimesPage.vue';
// import addItemForm from './addItemForm';
// import listView from './listView';

// Vue.use(VueRouter);

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
