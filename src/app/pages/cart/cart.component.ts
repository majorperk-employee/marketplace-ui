import { Component, OnInit } from '@angular/core';
import { RewardItem } from '@app/models/market';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  listOfDisplayData: any[] = [];
  listOfAllData: any[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};

  currentPageDataChange($event: Array<{ id: number; name: string; age: number; address: string }>): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData.every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate = this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]);
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  ngOnInit(): void {
    this.listOfAllData = this.getCart();
  }

  deleteItems() {
    var deleting = "";
    for (var itemId in this.mapOfCheckedId) {
      if(this.mapOfCheckedId[itemId]) {
        deleting += itemId + " "
      }
    }
    alert(deleting);
  }


  getCart(): RewardItem[] {
    return cart;
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