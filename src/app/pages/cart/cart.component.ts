import { Component, OnInit, OnDestroy } from '@angular/core';
import { RewardItem, Cart } from '@app/models/market';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Account } from '@app/models/account';
import { ShoppingService } from '@app/service/shopping.service';
import { AccountService } from '@app/service/account.service';
import { GLOBAL, MEMORY } from '@app/constants'
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  point_multiplier = MEMORY.pointRatio;

  isLoading: boolean = true;

  account: Account;
  cart: Cart;
  cartTotal: number;
  cartCount: number;

  checkoutIsLoading: boolean = false;

  isAllDisplayDataChecked;
  isIndeterminate = false;
  listOfDisplayData: any[] = [];

  cartItems: any[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};

  cartItemsSubscription: Subscription;

  constructor(private modalService: NzModalService, private route: ActivatedRoute, private shoppingService: ShoppingService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.cartItemsSubscription = this.route.data.subscribe(data => {
      this.cart = data.items;
      this.cartTotal = this.cart.cost;
      this.account = data.account;
    });
    this.isLoading = false;
  }

  currentPageDataChange($event): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData.every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate = this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]);
  }

  refreshCart(): void {
    this.cart = this.accountService.currentAccount.cart;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }


  deleteMany() {
    var deleteReqBody = [];

    for (var itemId in this.mapOfCheckedId) {
      if (this.mapOfCheckedId[itemId]) {
        deleteReqBody.push(itemId);
      }
    }

    this.shoppingService.removeFromCart(deleteReqBody, this.account.id).then(
      resp => { this.refreshCart(); },
      err => { console.error("Could not display cart. Please refresh.") }
    );

  }

  deleteOne(itemId: number) {

    this.shoppingService.removeFromCart([itemId], this.account.id).then(
      resp => { this.refreshCart(); },
      err => { console.error("Could not display cart. Please refresh.") }
    );

  }

  checkout() {
      this.shoppingService.redeemCart(this.account.id).then(
        resp => { this.refreshCart(); },
        err => { console.error("Could not display cart. Please refresh.") }
      );
  }

  get validCart(): boolean {
    return (!this.isIndeterminate && this.cart.items.length > 0 && !this.insufficientFunds) ? true : false;
  }

  get insufficientFunds(): boolean {
    return (this.account.points < this.cart.cost) ? true : false;
  }

  ngOnDestroy() {
    this.cartItemsSubscription.unsubscribe();
  }

  showConfirm(): void {
    this.modalService.confirm({
      nzTitle: '<i>Are you sure?</i>',
      nzContent: `<p><b>${this.cart.cost}</b> points will be removed from your account. You will receive a confirmation email shortly.</p>`,
      nzOkText: 'I want my rewards!',
      nzOnOk: () => { this.checkoutIsLoading = true; setTimeout(() => { console.log("here"); this.checkout(); this.destroyTplModal(); this.checkoutIsLoading = false; }, 3000);},
      nzOnCancel: () => {this.destroyTplModal()}
    });
  }

  destroyTplModal(): void {
    this.modalService.closeAll();
  }
}