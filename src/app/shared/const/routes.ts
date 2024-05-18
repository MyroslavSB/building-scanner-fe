export type AuthRoutingPath =
  'login' |
  'register'

export type MainRoutingPath =
  'main_page' |
  'home_page' |
  'profile_page' |
  'buildings_page' |
  'rankings_page'


export type AppRoutingPaths =
  MainRoutingPath |
  AuthRoutingPath

export const AppRoutes: Record<
  AppRoutingPaths,
  {
    routerPath: string;
    fullPath?: string;
  }
> = {
  login: {routerPath: 'login', fullPath: '/login'},
  register: {routerPath: 'register', fullPath: '/register'},
  main_page: {routerPath: '', fullPath: ''},
  home_page: {routerPath: 'home', fullPath: '/home'},
  profile_page: {routerPath: 'profile', fullPath: '/profile'},
  buildings_page: {routerPath: 'buildings', fullPath: '/buildings'},
  rankings_page: {routerPath: 'rankings', fullPath: '/yourankings'}
}
