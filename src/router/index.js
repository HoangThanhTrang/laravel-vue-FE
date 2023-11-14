import { createRouter, createWebHashHistory } from 'vue-router'
import TasksPage from '../pages/TasksPage'

const routes = [
  {
    path: '/',
    name: 'tasks',
    component: TasksPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
