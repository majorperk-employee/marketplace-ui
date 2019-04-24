import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { EMPTY, Observable, of } from "rxjs";
import { switchMap, take } from 'rxjs/operators';
import { AccountService } from '../account.service';

@Injectable({
    providedIn: 'root',
})
export class AccountResolve implements Resolve<Account> {
    constructor(private accountService: AccountService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Account> | Observable<never> {
        return this.accountService.getAccount("seagles1").pipe(
            take(1),
            switchMap(account => {
                if (account) {
                    return of(account);
                } else {
                    console.log("Error getting reward items.");
                    return EMPTY;
                }
            })
        );
    }
}