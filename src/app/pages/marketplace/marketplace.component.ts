//meta.checked is used to signify in cart.

import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoModalComponent } from '@app/components/info/info.modal';
import { RewardItem, Brand, Meta } from '@app/models/market';
import { Subscription } from 'rxjs';
import { ShoppingService } from '@app/service/shopping.service';
import { AccountService } from '@app/service/account.service';
import { Account } from '@app/models/account';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit, OnDestroy {

  filters = {tags: [], search: []};

  loading = true;
  account: Account;

  search: string = "";
  sort: number = 1;

  isCollapsed = false;

  itemCount: number = 0;
  pageSize: number = 20;

  pageIndex = 1;
  allRewards: Brand[];
  marketItems: Brand[] = [];


  brandsSubscription: Subscription;
  paramSubscription: Subscription;

  categories: any[] = [];
  constructor(private route: ActivatedRoute, private infoModal: InfoModalComponent, private shoppingService: ShoppingService, private accountService: AccountService) { }

  ngOnInit() {

    this.account = this.accountService.currentAccount;

    this.brandsSubscription = this.route.data.subscribe(data => {
      this.allRewards = data.items;
      this.marketItems = data.items;
    });

    this.paramSubscription = this.route.paramMap.subscribe(params => {
      var filter = params.keys ? params.get('filter') : '';
      if (filter) {
        this.search = filter;
      }
    })

    this.categories = categories;

    this.loadData(this.pageIndex);

    this.loading = false;
  }

  ngOnDestroy() {
    this.brandsSubscription.unsubscribe();
  }

  loadData(pi: number) {

    this.loading = true;

    let startIndex = (pi - 1) * this.pageSize;

    let list = this.applyFilter();

    let viewSize = list.length < this.pageSize ? list.length : this.pageSize;

    this.marketItems = this.applySort(this.sort, new Array(viewSize).fill({}).map((_, index) => {
      let idx = startIndex + index;
      if (idx < list.length) {
        let displayItem = list[idx];
        return displayItem;
      }
    }));

    this.loading = false;
  }

  applyFilter(): Brand[] {
    const filterFunc = (item: Brand) =>
      (this.filters.search.length ? this.filters.search.some(name => item.brandName.toLowerCase().indexOf(name.toLowerCase()) !== -1) : true) &&
      (this.filters.tags.length ? this.filters.tags.some(tag => item.brandName.toLowerCase().indexOf(tag.toLowerCase()) !== -1) : true)

    let list = this.allRewards.filter((item: Brand) => filterFunc(item));

    if (list.length < 0) { list = this.allRewards };

    this.itemCount = list.length;

    return list;
  }

  onChange() {
    this.loading = true;
    this.filters.search = [this.search];
    this.applyFilter();
    this.pageIndex = 1;
    this.loadData(1);
    this.loading = false;
  }

  selected(tag) {
    this.loading = true;
    let add = true;
    this.filters.search = this.filters.search.filter(function (tagInList) {
      if (tag != tagInList) {
        console.log("1");
        return tagInList;
      } else {
        console.log("1")
        add = false;
      }
    });

    if (add) { this.filters.search.push(tag) };

    this.applyFilter();
    this.pageIndex = 1;
    this.loadData(1);
    this.loading = false;
  }

  applySort(sort: number, list: any[]) {
    switch (sort) {
      case 1:
        return list.sort((a, b) => { return a.brandName.localeCompare(b.brandName) });
      case 2:
        return list.sort((a, b) => { return a.price - b.price });
    }
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

  addToCart(item: RewardItem) {

    this.shoppingService.addToCart(item.id, this.account.id);

    // REFRESH ACCOUNT
    this.account = this.accountService.currentAccount;

    item.meta.checked = true;

  }

  removeFromCart(item: RewardItem) {

    let removeBody = [item.id];

    this.shoppingService.removeFromCart(removeBody, this.account.id);

    // REFRESH ACCOUNT
    this.account = this.accountService.currentAccount;

    item.meta.checked = false;
  }

  showModal(brand: Brand) {
    this.infoModal.createRewardModal(brand);
  }

}

let categories = [
  {
    icon: "icon",
    name: "Auto"
  },
  {
    icon: "icon",
    name: "Sport"
  },
  {
    icon: "icon",
    name: "Travel"
  },
  {
    icon: "icon",
    name: "Sport"
  },
  {
    icon: "icon",
    name: "Food"
  },
  {
    icon: "icon",
    name: "Clothing"
  }
]