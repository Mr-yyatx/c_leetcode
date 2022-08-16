export const routes = [
  {
    path: "/",
    component: '@/pages/home/index',
    exact: true,
    wrappers: ['@/wrappers/index']
  },
  {
    path: "/home",
    component: '@/pages/home/index',
    exact: true,
    wrappers: ['@/wrappers/index']
  },
  {
    path: "/learn",
    component: '@/pages/learn/index',
    exact: true
  },
  {
    path: "/community",
    component: '@/pages/community/index',
    exact: true
  },
  {
    path: "/profile",
    component: '@/pages/profile/index',
    exact: true
  },
  {
    path: "/404",
    component: '@/pages/404',
    exact: true
  }
]