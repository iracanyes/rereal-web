import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivateFn,
  Route,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import {inject, PLATFORM_ID} from "@angular/core";
import {DOCUMENT, isPlatformBrowser} from "@angular/common";
import {Environment} from "@environment";
import { isNil } from 'lodash';

export const DashboardGuard: (redirectUri: string)=> CanActivateFn  = (redirectUri: string): CanActivateFn => {
  return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const router: Router = inject(Router);
    const document: Document = inject(DOCUMENT);
    const localStorage = document.defaultView?.localStorage;


    if(localStorage){
      const tokenStr = localStorage.getItem(Environment.TOKEN_KEY);

      const canAccess: boolean = !isNil(tokenStr)
        && JSON.parse(tokenStr).token.length > 0;



      return canAccess || router.createUrlTree([redirectUri], {queryParams: {'previous': state.url }});
    }else{
      return router.createUrlTree([redirectUri], {queryParams: {'previous': state.url }});
    }


  };
}
