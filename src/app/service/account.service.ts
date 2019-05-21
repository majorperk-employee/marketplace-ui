import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account, Auth } from '@app/models/account';
import { Cart } from '@app/models/market';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  account: Account;

  getAccountByUserName(username: string) {
    return this.http.get<Account>(`${environment.apiUrl}/accounts/username/${username}`, httpOptions);
  }

  getAccountByID(id: number) {
    return this.http.get<Account>(`${environment.apiUrl}/accounts/id/${id}`, httpOptions);
  }

  getAuth(id:number) {
    return this.http.get<Auth>(`${environment.apiUrl}/accounts/getAuth/${id}`, httpOptions);
  }

  public async refreshPoints(id:number) {
    let asyncResult = await this.http.get<Account>(`${environment.apiUrl}/accounts/id/${id}`, httpOptions).toPromise().then(
      resp => { this.account.points = resp.points; },
      err => { console.error("Unable to refresh points. Please refresh page", err ) }
    );
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