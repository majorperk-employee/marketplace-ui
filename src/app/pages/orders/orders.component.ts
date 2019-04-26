import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from '@app/service/account.service';
import { ShoppingService } from '@app/service/shopping.service';
import { ActivatedRoute } from '@angular/router';
import { Purchase, RewardItem } from '@app/models/market';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {

  loading: boolean = true;

  searchValue = '';
  sortName: string | null = null;
  sortValue: string | null = null;

  listOfParentData: Purchase[] = [];
  filteredData: Purchase[] = [];
  ordersSubscription: Subscription;

  constructor(private route: ActivatedRoute, private shoppingService: ShoppingService) { }

  ngOnInit(): void {

    this.ordersSubscription = this.route.data.subscribe((data) => {
      this.listOfParentData = data.orders;
      this.filteredData = this.listOfParentData;
    });

    this.loading = false;
  }

  ngOnDestroy() { this.ordersSubscription.unsubscribe(); }


  reset(): void {
    this.searchValue = '';
    this.search();
  }

  sort(value: string): void {
    this.sortValue = value;
    this.search();
  }

  search(): void {
    const filterFunc = (item: Purchase) => {
      return (item.id.toString().indexOf(this.searchValue.toString()) !== -1);
    };
    const data: Purchase[] = this.listOfParentData.filter((item: Purchase) => filterFunc(item));
    this.filteredData = data.sort((a, b) =>
      this.sortValue === 'ascend'
        ? <any>new Date(a.createdAt) > <any>new Date(b.createdAt)
          ? 1
          : -1
        : <any>new Date(b.createdAt) > <any>new Date(a.createdAt)
          ? 1
          : -1
    );
  }

}
