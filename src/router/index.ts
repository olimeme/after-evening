import * as VueRouter from "vue-router";
import HomePage from "../pages/HomePage.vue";
import PostPage from "../pages/PostPage.vue";

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/post/:postId", name: "post", component: PostPage, props: true },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
