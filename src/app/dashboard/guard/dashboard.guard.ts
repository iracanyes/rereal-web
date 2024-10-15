import {CanActivateFn, Router} from "@angular/router";
import {inject, PLATFORM_ID} from "@angular/core";
import {isPlatformBrowser} from "@angular/common";
import {Environment} from "@environment";
import { isNil } from 'lodash';

export const DashboardGuard = (redirectUri: string): CanActivateFn => {
  return () => {
    const router: Router = inject(Router);

    if(isPlatformBrowser(PLATFORM_ID)){
      const tokenStr = localStorage.getItem(Environment.TOKEN_KEY);

      const canAccess: boolean = !isNil(tokenStr)
      && JSON.parse(tokenStr).token.length > 0;

      return canAccess || router.createUrlTree([redirectUri]);
    }else{
      return router.createUrlTree([redirectUri]);
    }
  };
}
