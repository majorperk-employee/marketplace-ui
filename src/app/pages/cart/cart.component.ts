import { Component, OnInit } from '@angular/core';
import { RewardItem } from '@app/models/reward-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  constructor() { }
  
  cart: RewardItem[] = [];
  displayData: any[] = [];

  bordered = false;
  loading = false;
  sizeChanger = false;
  footer = true;
  fixHeader = false;
  expandable = true;
  checkbox = true;
  allChecked = false;
  indeterminate = false;
  simple = false;
  noResult = false;

  currentPageDataChange($event: Array<RewardItem>): void {
    this.displayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    const validData = this.displayData.filter(value => !value.disabled);
    console.log(validData);
    const allChecked = validData.length > 0 && validData.every(value => value.checked === true);
    const allUnChecked = validData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = !allChecked && !allUnChecked;
    // console.log(this.cart);
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.refreshStatus();
  }

  ngOnInit(): void {
    this.cart = this.getCart();
  }

  noResultChange(status: boolean): void {
    this.cart = [];
    if (!status) {
      this.ngOnInit();
    }
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
      meta: { purchased: 10, clicked: 10 }
    },
    {
      id: 2,
      name: "Cart Item One",
      price: 500,
      type: "Gift Card",
      description: "Cart Item Gift Card",
      tags: ["Food", "Technology", "Gift Card"],
      imageURL: "",
      meta: { purchased: 10, clicked: 10 }
    },
    {
      id: 3,
      name: "Cart Item One",
      price: 500,
      type: "Gift Card",
      description: "Cart Item Gift Card",
      tags: ["Food", "Technology", "Gift Card"],
      imageURL: "",
      meta: { purchased: 10, clicked: 10 }
    },
    {
      id: 1,
      name: "Cart Item One",
      price: 500,
      type: "Gift Card",
      description: "Cart Item Gift Card",
      tags: ["Food", "Technology", "Gift Card"],
      imageURL: "",
      meta: { purchased: 10, clicked: 10 }
    },
    {
      id: 2,
      name: "Cart Item One",
      price: 500,
      type: "Gift Card",
      description: "Cart Item Gift Card",
      tags: ["Food", "Technology", "Gift Card"],
      imageURL: "",
      meta: { purchased: 10, clicked: 10 }
    },
    {
      id: 3,
      name: "Cart Item One",
      price: 500,
      type: "Gift Card",
      description: "Cart Item Gift Card",
      tags: ["Food", "Technology", "Gift Card"],
      imageURL: "",
      meta: { purchased: 10, clicked: 10 }
    },
    {
      id: 1,
      name: "Cart Item One",
      price: 500,
      type: "Gift Card",
      description: "Cart Item Gift Card",
      tags: ["Food", "Technology", "Gift Card"],
      imageURL: "",
      meta: { purchased: 10, clicked: 10 }
    },
    {
      id: 2,
      name: "Cart Item One",
      price: 500,
      type: "Gift Card",
      description: "Cart Item Gift Card",
      tags: ["Food", "Technology", "Gift Card"],
      imageURL: "",
      meta: { purchased: 10, clicked: 10 }
    },
    {
      id: 3,
      name: "Cart Item One",
      price: 500,
      type: "Gift Card",
      description: "Cart Item Gift Card",
      tags: ["Food", "Technology", "Gift Card"],
      imageURL: "",
      meta: { purchased: 10, clicked: 10 }
    },
    {
      id: 1,
      name: "Cart Item One",
      price: 500,
      type: "Gift Card",
      description: "Cart Item Gift Card",
      tags: ["Food", "Technology", "Gift Card"],
      imageURL: "",
      meta: { purchased: 10, clicked: 10 }
    },
    {
      id: 2,
      name: "Cart Item One",
      price: 500,
      type: "Gift Card",
      description: "Cart Item Gift Card",
      tags: ["Food", "Technology", "Gift Card"],
      imageURL: "",
      meta: { purchased: 10, clicked: 10 }
    },
    {
      id: 3,
      name: "Cart Item One",
      price: 500,
      type: "Gift Card",
      description: "Cart Item Gift Card",
      tags: ["Food", "Technology", "Gift Card"],
      imageURL: "",
      meta: { purchased: 10, clicked: 10 }
    },
    {
      id: 1,
      name: "Cart Item One",
      price: 500,
      type: "Gift Card",
      description: "Cart Item Gift Card",
      tags: ["Food", "Technology", "Gift Card"],
      imageURL: "",
      meta: { purchased: 10, clicked: 10 }
    },
    {
      id: 2,
      name: "Cart Item One",
      price: 500,
      type: "Gift Card",
      description: "Cart Item Gift Card",
      tags: ["Food", "Technology", "Gift Card"],
      imageURL: "",
      meta: { purchased: 10, clicked: 10 }
    },
    {
      id: 3,
      name: "Cart Item One",
      price: 500,
      type: "Gift Card",
      description: "Cart Item Gift Card",
      tags: ["Food", "Technology", "Gift Card"],
      imageURL: "",
      meta: { purchased: 10, clicked: 10 }
    }
  ]