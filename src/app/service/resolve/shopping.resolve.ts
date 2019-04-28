import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Brand, RewardItem } from "@app/models/market";
import { EMPTY, Observable, of } from "rxjs";
import { switchMap, take } from 'rxjs/operators';
import { ShoppingService } from "../shopping.service";
import { AccountService } from '../account.service';

@Injectable({
    providedIn: 'root',
})
export class BrandsResolve implements Resolve<Brand[]> {
    constructor(private shoppingService: ShoppingService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Brand[]> | Observable<never> {
        return this.shoppingService.getRewards().pipe(
            take(1),
            switchMap(items => {
                if (items) {
                    return of(items);
                } else {
                    console.log("Error getting brands list.");
                    return EMPTY;
                }
            })
        );
    }
}

@Injectable({
    providedIn: 'root',
})
export class CartItemsResolve implements Resolve<RewardItem[]> {
    constructor(private shoppingService: ShoppingService, private accountService: AccountService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RewardItem[]> | Observable<never> {
        return this.shoppingService.getCart(this.accountService.currentAccount.id).pipe(
            take(1),
            switchMap(items => {
                if (items) {
                    return of(items);
                } else {
                    console.log("Error getting reward items.");
                    return EMPTY;
                }
            })
        );
    }
}

@Injectable({
    providedIn: 'root',
})
export class OrderItemsResolve implements Resolve<any> {
    constructor(private shoppingService: ShoppingService, private accountService: AccountService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
        return this.shoppingService.getOrders(this.accountService.currentAccount.id).pipe(
            take(1),
            switchMap(items => {
                if (items) {
                    return of(items);
                } else {
                    console.log("Error getting reward items.");
                    return EMPTY;
                }
            })
        );
    }
}