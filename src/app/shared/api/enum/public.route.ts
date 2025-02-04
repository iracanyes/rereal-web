/**
 * Provide all the public routes of the web app
 */
export enum PublicRoute {
  SIGN_IN = 'account/sign-in',
  REFRESH = 'account/refresh',

}

export const publicRoutes = Object.values(PublicRoute) as string[];
