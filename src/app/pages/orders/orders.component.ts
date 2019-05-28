import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RewardLinkResponse } from '@app/models/tango';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {

  account;
  loading: boolean = true;

  searchValue = '';
  sortName: string | null = null;
  sortValue: string | null = "ascend";

  orders: RewardLinkResponse[] = [];
  ordersFiltered: RewardLinkResponse[] = [];
  ordersSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.ordersSubscription = this.route.data.subscribe((data) => {
      this.account = data.account;
      this.orders = this.account.rewardLinks;
      this.ordersFiltered = this.orders;
    });
    this.sort("descend");
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
    
    const filterFunc = (item: RewardLinkResponse) => {
      return (item.referenceOrderID.toString().indexOf(this.searchValue.toString()) !== -1);
    };
    
    const data: RewardLinkResponse[] = this.orders.filter((item: RewardLinkResponse) => filterFunc(item));

    this.ordersFiltered = data.sort((a, b) =>
      this.sortValue === 'ascend'
        ? <any>new Date(a.createdAt) > <any>new Date(b.createdAt)
          ? 1
          : -1
        : <any>new Date(b.createdAt) > <any>new Date(a.createdAt)
          ? 1
          : -1
    );
  }
  
  navigate(url: string) {
    window.open(url,"_blank");
  }
}
