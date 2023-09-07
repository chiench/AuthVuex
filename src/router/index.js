import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../page/HomePage.vue";
import SignInPage from "../page/SignInPage.vue";
import SignUpPage from "../page/SignUpPage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/sign-in",
      name: "Sign In",
      component: SignInPage,
    },
    {
      path: "/sign-up",
      name: "Sign Up",
      component: SignUpPage,
    },
  ],
});

export default router;
