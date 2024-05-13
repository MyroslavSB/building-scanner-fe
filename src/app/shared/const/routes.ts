export type AuthRoutingPath =
  'login' |
  'register'

export type MainRoutingPath =
  'main_page'

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
  login: {routerPath: 'login', fullPath: 'login'},
  register: {routerPath: 'register', fullPath: 'register'},
  main_page: {routerPath: '', fullPath: ''}
}
