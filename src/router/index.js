import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Quiz from '../views/Quiz.vue'
import Question from '../views/Question.vue'
import QuestionResult from '../views/QuestionResult.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quiz',
    name: 'Quiz',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "quiz" */ '../views/Quiz.vue')
    component: Quiz
  },
  {
    path: '/question/:uuid',
    name: 'Question',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "quiz" */ '../views/Quiz.vue')
    component: Question
  },
  {
    path: '/result',
    name: 'QuestionResult',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "quiz" */ '../views/Quiz.vue')
    component: QuestionResult
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
