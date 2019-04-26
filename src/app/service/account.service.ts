import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '@app/models/account';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  account: Account;

  getAccount(username: string) {
    return this.http.get<Account>(`${environment.apiUrl}/accounts/getByUsername?username=${username}`, httpOptions);
  }

  get currentAccount(): Account {
    return this.account;
  }
  set currentAccount(user: Account) {
    this.account = user;
  }
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export const temp: Account = {
  id: 1,
  cart: [],
  username: "sergeihanka",
  password: "password",
  firstName: "Sergei",
  lastName: "Hanka",
  tier: "Gold",
  address: "141 E 4th St",
  city: "Saint Paul",
  state: "MN",
  email: "sergei@hanka.com",
  zip: 55101,
  points: 30000,
  totaldays: 50,
  ontimedays: 27
}