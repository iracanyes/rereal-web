export enum ApiPublicNode {
  SIGN_IN = 'account/sign-in',
  REFRESH = 'account/refresh',

}

export const publicRoutes = Object.values(ApiPublicNode) as string[];
