import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'HOME',
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
