import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RewardItem } from '@app/models/market';
import { environment } from '@environments/environment';
import { first } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccount(username: string) {
    return this.http.get<Account>(`${environment.apiUrl}/accounts/getByUsername?username=${username}`, httpOptions);
  }
}