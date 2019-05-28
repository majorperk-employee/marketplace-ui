import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NzModalRef, NzDrawerRef, NzModalService } from 'ng-zorro-antd';
import { Brand, RewardItem, Cart, Meta } from '@app/models/market';
import { ShoppingService } from '@app/service/shopping.service';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AccountService } from '@app/service/account.service';
import { Account } from '@app/models/account';
import { RewardLinkResponse } from '@app/models/tango';

@Component({
  selector: 'app-reward-drawer',
  templateUrl: './reward-drawer.component.html',
  styleUrls: ['./reward-drawer.component.scss']
})
export class RewardDrawerComponent implements OnInit, OnDestroy {
  @Input() points;
  loading: boolean = true;
  error: boolean = false;
  id: number = 1989;
  brandKey: string = "B077325";
  account: Account;
  shortDescription: String;

  maxPoints: number;
  maxValue: number;
  dollarValue: number;
  pointsValue: number;
  checkoutDisabled: boolean = false;
  multiplier: number;

  reward: RewardLinkResponse;

  constructor(private modalService: NzModalService, private drawerRef: NzDrawerRef<string>, private shoppingService: ShoppingService, private accountService: AccountService) { }

  ngOnInit() {

    this.account = this.accountService.currentAccount;
    this.multiplier = this.account.tier.multiplier;

    this.maxValue = Math.floor(this.points / this.multiplier);
    this.dollarValue = this.maxValue;

    this.shoppingService.getReward(this.id).pipe(first()).subscribe(
      (resp) => {
        this.shortDescription = resp.shortDescription;
        this.loading = false;
      },
      error => { this.loading = false; this.error = true; }
    );

  }

  formatterDollar = (value: number) => {
    let roundedVal = Math.floor(value / 5) * 5;
    this.pointsValue = roundedVal * this.multiplier;
    this.checkoutDisabled = this.pointsValue < 5;
    return `$ ${roundedVal}`;
  };

  showConfirm(): void {
    if (this.pointsValue < 5) {
      return;
    }
    this.modalService.confirm({
      nzTitle: '<i>Are you sure?</i>',
      nzContent: `<p><b>${this.pointsValue.toLocaleString()}</b> points will be removed from your account. You will receive a <b>non-refundable</b> instant reward and a confirmation email shortly.</p>`,
      nzOkText: 'I want my rewards!',
      nzOnOk: () => { this.loading = true; this.checkout(); },
      nzOnCancel: () => { this.modalService.closeAll(); }
    });
  }

  checkout() {
    this.shoppingService.redeemRewardLink(this.account.id, this.dollarValue).then(
      resp => {

        this.reward = resp;

        // REFRESH ACCOUNT POINTS
        this.accountService.refreshPoints(this.account.id);

        this.loading = false; 
      },
      error => { console.error("checkout error", error); this.error = true; this.loading = false; }
    );
  }

  navigate(url: string) {
    window.open(url,"_blank");
  }

  dismissReward(){
    this.reward = null;
  }

  ngOnDestroy() {
  }

  close(): void {
    this.drawerRef.close();
  }
}