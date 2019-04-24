import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RewardItem } from '@app/models/market';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit, OnDestroy {

  loading = true;

  search: string = "";
  sort: number = 1;
  tags: string[] = [];

  isCollapsed = false;

  itemCount: number = 0;
  pageSize: number = 20;

  pageIndex = 1;
  allRewards: RewardItem[];
  marketItems: RewardItem[] = [];


  rewardItemsSubscription: Subscription;
  paramSubscription: Subscription;
  
  categories: any[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.rewardItemsSubscription = this.route.data.subscribe(data => {
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
    this.rewardItemsSubscription.unsubscribe();
  }

  applyFilter(): RewardItem[] {

    let filtered = this.allRewards.filter(item => {
      if (this.search != "" && this.tags.length > 0) {
        if (this.applySearch(item) || this.applyTags(item)) {
          return item;
        }
      } else if (this.tags.length < 1 && this.search != "") {
        if (this.applySearch(item)) {
          return item;
        }
      } else if (this.tags.length > 0 && this.search == "") {
        if (this.applyTags(item)) {
          return item;
        }
      } else {
        return item;
      }
    });

    this.itemCount = filtered.length;

    return filtered;
  }

  loadData(pi: number) {
    let startIndex = (pi - 1) * this.pageSize;

    let list = this.applyFilter();

    let viewSize = list.length < this.pageSize ? list.length : this.pageSize;

    this.marketItems = this.applySort(this.sort, new Array(viewSize).fill({}).map((_, index) => {
      let idx = startIndex + index;
      if (idx < list.length) {
        return list[idx];
      }
    }));
  }

  onChange() {
    this.applyFilter();
    this.pageIndex = 1;
    this.loadData(1);
  }

  selected(tag) {
    if (this.tags.indexOf(tag) > -1) {
      this.removeTag(tag);
    } else {
      this.addTag(tag);
    }
  }

  addTag(tag: string) {
    this.tags.push(tag);
    this.applyFilter();
    this.pageIndex = 1;
    this.loadData(1);
  }

  removeTag(removeTag: string) {
    this.tags = this.tags.filter(function (tag) {
      return tag != removeTag;
    });
    this.applyFilter();
    this.pageIndex = 1;
    this.loadData(1);
  }

  applySort(sort: number, list: any[]) {
    switch (sort) {
      case 1:
        return list.sort((a, b) => { return a.name.localeCompare(b.name) });
      case 2:
        return list.sort((a, b) => { return a.price - b.price });
    }
  }

  applySearch(item: RewardItem): boolean {
    if (item.name.toLowerCase().includes(this.search.toLowerCase())) {
      return true;
    };
    return false;
  }

  applyTags(item): boolean {
    let tagged: boolean = false;
    if (item.tags) {
      this.tags.forEach(tag => {
        if (item.tags.indexOf(tag) > -1) {
          tagged = true;
        }
      });
    }
    return tagged;
  }

}

let categories = [
  {
    icon: "icon",
    name: "Gift Cards",
    tags: ["Dining Out", "Convenience Store", "Gas"]
  },
  {
    icon: "icon",
    name: "Food and Drink",
    tags: ["Coffee", "Fast-Casual", "Fast Food", "Restaurant"]
  },
  {
    icon: "icon",
    name: "Fitness",
    tags: ["Lifetime Fitness", "Anytime Fitness", "YMCA"]
  },
  {
    icon: "icon",
    name: "Travel",
    tags: ["Delta SkyMiles", "Airline Voucher"]
  },
  {
    icon: "icon",
    name: "Electronics",
    tags: ["Apple", "Samsung", "Phone", "Tablet", "Smart Devices"]
  },
  {
    icon: "icon",
    name: "Transportation",
    tags: ["Metro", "Bus", "Uber", "Lyft"]
  }
]