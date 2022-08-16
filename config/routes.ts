export const routes = [
  {
    path: "/home",
    component: '@/pages/home/index',
    exact: true,
    wrappers: ['@/wrappers/index']
  },
  {
    path: "/",
    component: '@/pages/index',
    exact: true
  },
  {
    path: "/404",
    component: '@/pages/404',
    exact: true
  }
]