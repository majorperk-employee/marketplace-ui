import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd';
import { Brand, RewardItem, Cart, Meta } from '@app/models/market';
import { ShoppingService } from '@app/service/shopping.service';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AccountService } from '@app/service/account.service';
import { Account } from '@app/models/account';

@Component({
  selector: 'app-reward-modal',
  templateUrl: './reward-modal.component.html',
  styleUrls: ['./reward-modal.component.scss']
})
export class RewardModalComponent implements OnInit, OnDestroy {
  @Input() id: number;

  account: Account;
  multiplier: number = 50;
  cart: Cart;
  brand: Brand;
  currentItem: RewardItem;

  loading: boolean = true;
  error: boolean = false;
  itemSubscription: Subscription;

  customPrice: number = 0;
  formatterDollar = (value: number) => `$ ${value}`;
  parserDollar = (value: string) => value.replace('$ ', '');

  constructor(private modal: NzModalRef, private shoppingService: ShoppingService, private accountService: AccountService) { }

  ngOnInit() {

    this.account = this.accountService.currentAccount;

    // this.multiplier = this.account.tier.multiplier;

    this.itemSubscription = this.shoppingService.getReward(this.id).pipe(first()).subscribe(
      (resp: Brand) => {
        if (resp.items) { resp.items.forEach(item => item.meta = new Meta(this.inCart(item.id))) };
        this.brand = resp;
        this.loading = false;
      },
      error => { this.loading = false; this.error = true; }
    );

  }

  addToCart(item: RewardItem, faceValue: any) {

    let price = faceValue != null ? faceValue : this.customPrice;

    this.shoppingService.addToCart(item.id, this.account.id, price);
    item.meta.checked = true;
    this.customPrice = 0;

    // REFRESH ACCOUNT
    this.account = this.accountService.currentAccount;

  }

  removeFromCart(item: RewardItem) {

    let removeBody = [item.id];

    this.shoppingService.removeFromCart(removeBody, this.account.id);

    // REFRESH ACCOUNT
    this.account = this.accountService.currentAccount;

    item.meta.checked = false;
  }

  inCart(itemId: number): boolean {
    let incart = false;
    this.account.cart.items.forEach((item: RewardItem) => {
      if (item.id == itemId) {
        incart = true;
      }
    });
    return incart;
  }

  setItem(item: RewardItem) {
    this.currentItem = item;
  }

  ngOnDestroy() {
    this.customPrice = 0;
    this.destroyModal()
  }

  destroyModal(): void {
    this.customPrice = 0;
    this.currentItem = null;
    this.itemSubscription.unsubscribe();
    this.modal.destroy();
  }

  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
