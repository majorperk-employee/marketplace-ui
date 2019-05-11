import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Account, Auth } from '@app/models/account';
import { EMPTY, Observable, of } from "rxjs";
import { switchMap, take } from 'rxjs/operators';
import { AccountService } from '../account.service';

@Injectable({
    providedIn: 'root',
})
export class AccountResolve implements Resolve<Account> {
    constructor(private accountService: AccountService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Account> | Observable<never> {
        return this.accountService.getAccount("troycrema").pipe(
            take(1),
            switchMap(account => {
                if (account) {
                    this.accountService.currentAccount = account;
                    return of(account);
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
export class AuthResolve implements Resolve<Auth> {
    constructor(private accountService: AccountService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Auth> | Observable<never> {
        return this.accountService.getAuth(this.accountService.currentAccount.id).pipe(
            take(1),
            switchMap(auth => {
                if (auth) {
                    return of(auth);
                } else {
                    console.log("Error getting reward items.");
                    return EMPTY;
                }
            })
        );
    }
}