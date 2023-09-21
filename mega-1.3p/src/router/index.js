import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
});

const app = createApp({
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Task 1.1P",
          description: "Create an HTML Page and add CSS to that page",
          image: "task1.1p.jpg",
          link: "https://github.com/pastabrainz/task1.12",
        },
        {
          id: 2,
          title: "Task.1.2P",
          description: "The todo website",
          image: "task1.2P.jpg",
          link: "https://github.com/pastabrainz/1.2P",
        },
        {
          id: 3,
          title: "Task.2.1c",
          description: "Vue is cool",
          image: "vue3.jpg",
          link: "https://github.com/pastabrainz/vue3",
        },
        {
          id: 4,
          title: "Task.2.2c",
          description: "Personal Progress Tracking Website",
          image: "task2.2c.jpg",
          link: "https://github.com/pastabrainz/2.2C",
        },
        {
          id: 5,
          title: "Task.2.3c",
          description: "Shopping list website",
          image: "task2.3.jpg",
          link: "https://github.com/pastabrainz/better-Java/blob/main/vue3/shoppinglist.html",
        },
      ];
    },
  },
});

// Now, you can use the router and mount the app
app.use(router);
app.mount("#app");
