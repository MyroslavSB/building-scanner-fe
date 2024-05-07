export type MainRoutingPath =
  'login' |
  'register'

export const AppRoutes: Record<
  MainRoutingPath,
  {
    routerPath: string;
    fullPath?: string;
  }
> = {
  login: {routerPath: 'login', fullPath: 'login'},
  register: {routerPath: 'register', fullPath: 'register'}
}
