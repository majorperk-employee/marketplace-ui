import { Component } from '@angular/core';
import { RewardItem } from '@app/models/market';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  searchValue = '';
  sortName: string | null = null;
  sortValue: string | null = null;
  listOfFilterAddress = [{ text: 'London', value: 'London' }, { text: 'Sidney', value: 'Sidney' }];
  listOfSearchAddress: string[] = [];
  listOfData: Array<RewardItem> = orders;
  listOfDisplayData = [...this.listOfData];

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  sort(sortName: string, value: string): void {
    this.sortName = sortName;
    this.sortValue = value;
    this.search();
  }

  filterAddressChange(value: string[]): void {
    this.listOfSearchAddress = value;
    this.search();
  }

  search(): void {
    const filterFunc = (item: RewardItem) => {
      return (
        (this.listOfSearchAddress.length
          ? this.listOfSearchAddress.some(name => item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1)
          : true) && item.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1
      );
    };
    const data = this.listOfData.filter((item: RewardItem) => filterFunc(item));
    this.listOfDisplayData = data.sort((a, b) =>
      this.sortValue === 'ascend'
        ? a[this.sortName!] > b[this.sortName!] ? 1 : -1
        : b[this.sortName!] > a[this.sortName!] ? 1 : -1
    );
  }
}

const orders: RewardItem[] = [
  {
    id: 1,
    name: "This is item number one and it has a really long name and still looks pretty good in the table on a mobile device.",
    price: 500,
    type: "string",
    description: "string",
    tags: [],
    imageURL: "string",
    meta: {purchaseDate: "01/01/01"}
  },
  {
    id: 2,
    name: "Two",
    price: 500,
    type: "string",
    description: "string",
    tags: [],
    imageURL: "string",
    meta: {purchaseDate: "01/01/01"}
  },
  {
    id: 3,
    name: "Two",
    price: 500,
    type: "string",
    description: "string",
    tags: [],
    imageURL: "string",
    meta: {purchaseDate: "01/01/01"}
  },
  {
    id: 4,
    name: "Two",
    price: 500,
    type: "string",
    description: "string",
    tags: [],
    imageURL: "string",
    meta: {purchaseDate: "01/01/01"}
  },
  {
    id: 5,
    name: "Two",
    price: 500,
    type: "string",
    description: "string",
    tags: [],
    imageURL: "string",
    meta: {purchaseDate: "01/01/01"}
  },
  {
    id: 6,
    name: "Two",
    price: 500,
    type: "string",
    description: "string",
    tags: [],
    imageURL: "string",
    meta: {purchaseDate: "01/01/01"}
  },
  {
    id: 7,
    name: "Two",
    price: 500,
    type: "string",
    description: "string",
    tags: [],
    imageURL: "string",
    meta: {purchaseDate: "01/01/01"}
  },
  {
    id: 8,
    name: "Two",
    price: 500,
    type: "string",
    description: "string",
    tags: [],
    imageURL: "string",
    meta: {purchaseDate: "01/01/01"}
  },
  {
    id: 9,
    name: "Two",
    price: 500,
    type: "string",
    description: "string",
    tags: [],
    imageURL: "string",
    meta: {purchaseDate: "01/01/01"}
  },
  {
    id: 10,
    name: "Two",
    price: 500,
    type: "string",
    description: "string",
    tags: [],
    imageURL: "string",
    meta: {purchaseDate: "01/01/01"}
  },
  {
    id: 11,
    name: "Two",
    price: 500,
    type: "string",
    description: "string",
    tags: [],
    imageURL: "string",
    meta: {purchaseDate: "01/01/01"}
  },
  {
    id: 12,
    name: "Two",
    price: 500,
    type: "string",
    description: "string",
    tags: [],
    imageURL: "string",
    meta: {purchaseDate: "01/01/01"}
  },
  {
    id: 13,
    name: "Two",
    price: 500,
    type: "string",
    description: "string",
    tags: [],
    imageURL: "string",
    meta: {purchaseDate: "01/01/01"}
  },
  {
    id: 14,
    name: "Two",
    price: 500,
    type: "string",
    description: "string",
    tags: [],
    imageURL: "string",
    meta: {purchaseDate: "01/01/01"}
  },
  {
    id: 15,
    name: "Two",
    price: 500,
    type: "string",
    description: "string",
    tags: [],
    imageURL: "string",
    meta: {purchaseDate: "01/01/01"}
  }
];