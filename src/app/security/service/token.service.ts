import {effect, EffectRef, inject, Injectable, PLATFORM_ID, signal, WritableSignal} from "@angular/core";
import {Token} from "@api/types/token.interface";
import {Environment} from "@environment";
import {isNil} from "lodash";
import {isPlatformBrowser} from "@angular/common";


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private  readonly platform_id = inject(PLATFORM_ID);
  token: WritableSignal<Token> = signal(this.getToken());
  // Here is a listener which track change to the token with a signal
  // If the token change, we check if we update the local cache or remove it
  // if the token is empty
  private readonly tokenSaveHandler: EffectRef = effect(() => this.handleTokenChange(this.token()));


  setToken(token: Token): void {
    console.debug('TokenService.setToken - isPlatformBrowser(this.platform_id) => ', isPlatformBrowser(this.platform_id));
    if(isPlatformBrowser(this.platform_id)){
      if(token && token.token.trim().length > 0){
        this.token.set(token);
      }else{
        this.token.set(this.getEmpty());
        localStorage.removeItem(Environment.TOKEN_KEY);
      }
    }

  }

  private getToken(): Token {
    console.debug('TokenService.setToken - isPlatformBrowser(this.platform_id) => ', isPlatformBrowser(this.platform_id));

    if(isPlatformBrowser(this.platform_id)){
      const token = localStorage.getItem(Environment.TOKEN_KEY);
      return !isNil(token) ? JSON.parse(token) as Token : this.getEmpty();
    }else{
      return this.getEmpty();
    }

  }

  private getEmpty(): Token {
    return {
      token: '',
      refreshToken: '',
      credential: null,
      isEmpty: true
    } as Token;
  }

  private handleTokenChange(token: Token): void {
    //console.debug('handleTokenChange - isPlatformBrowser(this.platform_id) => ', isPlatformBrowser(this.platform_id));
    if(isPlatformBrowser(this.platform_id)){
      if(token && token.token.trim().length > 0){
        localStorage.setItem(Environment.TOKEN_KEY, JSON.stringify(token));
      }else{
        localStorage.removeItem(Environment.TOKEN_KEY);
      }
    }

  }

  signOut(): void {
    this.setToken(this.getEmpty());
  }
}
