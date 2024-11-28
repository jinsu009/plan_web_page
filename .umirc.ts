import { defineConfig } from '@umijs/max';

// config.ts
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {},
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'Home',
      path: '/home',
      component: './Home',
    },
    {
      name: 'ToDoList',
      path: '/TodoList',
      component: './TodoList',
    },
    {
      name: 'Board',
      path: '/Board',
      component: './Board',
    },
  ],
  npmClient: 'npm',
});
