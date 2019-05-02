import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account, Auth } from '@app/models/account';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Cart } from '@app/models/market';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  account: Account;

  getAccount(username: string) {
    return this.http.get<Account>(`${environment.apiUrl}/accounts/username/${username}`, httpOptions);
  }

  getAuth(id:number) {
    return this.http.get<Auth>(`${environment.apiUrl}/accounts/getAuth/${id}`, httpOptions);
  }

  get currentAccount(): Account {
    return this.account;
  }
  set currentAccount(user: Account) {
    this.account = user;
  }

  get currentAccountCart(): Cart {
    return this.account.cart;
  }
  set currentAccountCart(cart: Cart) {
    this.account.cart = cart;
  }
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};