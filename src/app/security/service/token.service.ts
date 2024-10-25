import {effect, EffectRef, inject, Injectable, signal, WritableSignal} from "@angular/core";
import {Token} from "@api/types/token.interface";
import {Environment} from "@environment";
import {isNil} from "lodash";


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  token: WritableSignal<Token> = signal(this.getToken());
  // Here is a listener which track change to the token with a signal
  // If the token change, we check if we update the local cache or remove it
  // if the token is empty
  private readonly tokenSaveHandler: EffectRef = effect(() => this.handleTokenChange(this.token()));


  setToken(token: Token): void {
    if(token && token.token.trim().length > 0){
      this.token.set(token);
    }else{
      this.token.set(this.getEmpty());
      localStorage.removeItem(Environment.TOKEN_KEY);
    }
  }

  private getToken(): Token {
    const token = localStorage.getItem(Environment.TOKEN_KEY);
    return !isNil(token) ? JSON.parse(token) as Token : this.getEmpty();
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
    if(token && token.token.trim().length > 0){
      localStorage.setItem(Environment.TOKEN_KEY, JSON.stringify(token.token));
    }else{
      localStorage.removeItem(Environment.TOKEN_KEY);
    }


  }

  signOut(): void {
    this.setToken(this.getEmpty());
  }
}
