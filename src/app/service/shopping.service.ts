import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart, RewardItem, Brand, Category } from '@app/models/market';
import { environment } from '@environments/environment';
import { first } from 'rxjs/operators';
import { AccountService } from './account.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {


  constructor(private http: HttpClient, private accountService: AccountService) { }

  getCategories() {
    return this.http.get<Category[]>(`${environment.apiUrl}/categories/all`, httpOptions);
  }

  getRewards() {
    return this.http.get<Brand[]>(`${environment.apiUrl}/brands/catalog`, httpOptions);
  }

  getReward(id: number) {
    return this.http.get<Brand>(`${environment.apiUrl}/brands/id/${id}`, httpOptions);
  }

  getCart(id: number) {
    return this.http.get<RewardItem[]>(`${environment.apiUrl}/cart/${id}`, httpOptions);
  }

  getOrders(id:number) {
    return this.http.get<any>(`${environment.apiUrl}/purchase/${id}`, httpOptions);
  }

  addToCart(itemId: number, userId: number, price: number) {
    this.http.post<Cart>(`${environment.apiUrl}/cart/${userId}/add/${itemId}`, price, httpOptions).pipe(first()).subscribe(
      resp => { this.accountService.currentAccountCart = resp; },
      error => { console.error("Unable to add to cart. Please refresh.", error); }
    );
  }

  public async removeFromCart(itemIds, userId) {
    let asyncResult = await this.http.post<Cart>(`${environment.apiUrl}/cart/${userId}/remove`, itemIds, httpOptions).toPromise().then(
      resp => { this.accountService.currentAccountCart = resp; },
      err => { console.error("Unable to remove from cart. Please refresh", err ) }
    );
  }

  public async redeemCart(userId) {
    let cart = this.accountService.currentAccountCart;
    let asyncResult = await this.http.post<any>(`${environment.apiUrl}/purchase/checkout/${userId}`, httpOptions).toPromise().then(
      resp => { this.accountService.currentAccountCart = resp; },
      err => { console.error("Unable to complete purchase. Please refresh.", err ) }
    );

  }
}