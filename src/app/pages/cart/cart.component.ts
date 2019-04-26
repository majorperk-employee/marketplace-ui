import { Component, OnInit, OnDestroy } from '@angular/core';
import { RewardItem, Cart } from '@app/models/market';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Account } from '@app/models/account';
import { ShoppingService } from '@app/service/shopping.service';
import { AccountService } from '@app/service/account.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  isLoading: boolean = true;


  account: Account;
  cart: Cart;
  cartTotal: number;
  cartCount: number;

  isAllDisplayDataChecked;
  isIndeterminate = false;
  listOfDisplayData: any[] = [];

  cartItems: any[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};

  cartItemsSubscription: Subscription;

  constructor(private route: ActivatedRoute,private shoppingService: ShoppingService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.cartItemsSubscription = this.route.data.subscribe(data => {
      this.cart = data.items;
      this.cartItems = this.cart.items;
      this.cartTotal = this.cart.total;
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

    this.shoppingService.removeFromCart(deleteReqBody, this.account.cart.id).then(
      resp => { this.refreshCart(); },
      err => { console.error("Could not get cart. Please refresh.")}
    );
    
  }

  deleteOne(itemId:number) {

    this.shoppingService.removeFromCart([itemId], this.account.cart.id).then(
      resp => { this.refreshCart(); },
      err => { console.error("Could not get cart. Please refresh.")}
    );
    
  }

  getCart(): RewardItem[] {
    return cart;
  }

  ngOnDestroy(){
    this.cartItemsSubscription.unsubscribe();
  }
}


const cart: RewardItem[] =
  [
    {
      id: 1,
      name: "Cart Item One",
      price: 500,
      type: "Gift Card",
      description: "Cart Item Gift Card",
      tags: ["Food", "Technology", "Gift Card"],
      imageURL: "",
      meta: { purchaseCount: 10, cartCount: 10 }
    },
    {
      id: 2,
      name: "Cart Item One",
      price: 500,
      type: "Gift Card",
      description: "Cart Item Gift Card",
      tags: ["Food", "Technology", "Gift Card"],
      imageURL: "",
      meta: { purchaseCount: 10, cartCount: 10 }
    },
    {
      id: 3,
      name: "Cart Item One",
      price: 500,
      type: "Gift Card",
      description: "Cart Item Gift Card",
      tags: ["Food", "Technology", "Gift Card"],
      imageURL: "",
      meta: { purchaseCount: 10, cartCount: 10 }
    },
    {
      id: 4,
      name: "Cart Item One",
      price: 500,
      type: "Gift Card",
      description: "Cart Item Gift Card",
      tags: ["Food", "Technology", "Gift Card"],
      imageURL: "",
      meta: { purchaseCount: 10, cartCount: 10 }
    },
    {
      id: 5,
      name: "Cart Item One",
      price: 500,
      type: "Gift Card",
      description: "Cart Item Gift Card",
      tags: ["Food", "Technology", "Gift Card"],
      imageURL: "",
      meta: { purchaseCount: 10, cartCount: 10 }
    },
    {
      id: 6,
      name: "Cart Item One",
      price: 500,
      type: "Gift Card",
      description: "Cart Item Gift Card",
      tags: ["Food", "Technology", "Gift Card"],
      imageURL: "",
      meta: { purchaseCount: 10, cartCount: 10 }
    }
  ]