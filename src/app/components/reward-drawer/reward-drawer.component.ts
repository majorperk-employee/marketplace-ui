import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NzModalRef, NzDrawerRef } from 'ng-zorro-antd';
import { Brand, RewardItem, Cart, Meta } from '@app/models/market';
import { ShoppingService } from '@app/service/shopping.service';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AccountService } from '@app/service/account.service';
import { Account } from '@app/models/account';

@Component({
  selector: 'app-reward-drawer',
  templateUrl: './reward-drawer.component.html',
  styleUrls: ['./reward-drawer.component.scss']
})
export class RewardDrawerComponent implements OnInit, OnDestroy {
  @Input() points;
  loading: boolean = true;
  error: boolean = true;
  id: number = 1989;
  brandKey: string = "B077325";
  account: Account;
  shortDescription: String;

  maxPoints: number;
  maxValue: number;
  dollarValue: number;
  pointsValue: number;

  multiplier: number;

  constructor(private drawerRef: NzDrawerRef<string>, private shoppingService: ShoppingService, private accountService: AccountService) { }

  ngOnInit() {

    this.account = this.accountService.currentAccount;
    this.multiplier = this.account.multiplier;

    this.setPrice(this.points);

    this.shoppingService.getReward(this.id).pipe(first()).subscribe(
    (resp) => {

      console.log(resp);
        this.shortDescription = resp.shortDescription;
        this.loading=false;
      },
      error => { this.loading = false; this.error = true; }
    );

  }

  formatterDollar = (value: number) => {
    let roundedVal = Math.floor(value / 5)*5;
    this.pointsValue = roundedVal * this.multiplier; 
    return `$ ${roundedVal}`;
  };
  
  parserDollar = (value: string) => value.replace('$ ', '');

  setPrice(userPoints: number) {
    this.maxPoints = Math.floor(userPoints/this.multiplier)*this.multiplier;
    this.maxValue = Math.floor(userPoints/this.multiplier);
    this.dollarValue = this.maxValue;
    this.pointsValue = this.dollarValue * this.multiplier;
  }

  ngOnDestroy() {
  }

  close(): void {
    this.drawerRef.close();
  }
}
