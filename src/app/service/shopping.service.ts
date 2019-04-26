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
export class ShoppingService {


  constructor(private http: HttpClient) { }

  getRewards() {
    return this.http.get<RewardItem[]>(`${environment.apiUrl}/rewards/all`, httpOptions);
  }

  getCart() {
    return this.http.get<string>(`${environment.apiUrl}/cart/all`, httpOptions);
  }

  getOrders() {
    return this.http.get<string>(`${environment.apiUrl}/orders/all`, httpOptions);
  }

  getCartCost() {

  }

  addToCart(itemId, cartId) {
    this.http.post<any>(`${environment.apiUrl}/cart/add`, {"itemId": itemId, "cartId" : cartId}, httpOptions).pipe(first()).subscribe(
      resp => { console.log(resp); },
      error => { console.log("Error in addToCart endpoint"); }
    );
  }

  public removeFromCart(itemId) {

    this.http.post<any>(`${environment.apiUrl}/cart/remove`, itemId).pipe(first()).subscribe(
      resp => { },
      error => { console.log("Error in removeFromCart endpoint"); }
    );
  }

  public redeemCart() {
    this.http.get<any>(`${environment.apiUrl}/cart/redeem`).pipe(first()).subscribe(
      resp => { },
      error => { console.log("Error in redeemCart endpoint"); }
    );
  }
}