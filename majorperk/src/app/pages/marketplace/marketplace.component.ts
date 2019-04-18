import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {

  isCollapsed = false;
  pageSize = 10;

  allRewards: any[];
  marketItems: any[] = [];

  constructor() { }

  ngOnInit() {
    this.allRewards = marketItems;
    this.loadData(1);
  }

  loadData(pi: number): void {
    console.log(this.allRewards.length);
    let startIndex = (pi - 1) * this.pageSize;
    this.marketItems =  new Array(this.pageSize).fill({}).map((_, index) => {
      console.log("index: ",startIndex + index);
      return this.allRewards[startIndex + index];
    });
  }
}

let marketItems = [
  {
    title: `Weekend Getaway - New York`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500
  },
  {
    title: `Weekend Getaway - Minneapolis`,
    image: 'http://www.upreshare.com/wp-content/uploads/2014/03/ducklings.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500
  },
  {
    title: `Weekend Getaway - Boston`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500
  },
  {
    title: `$5 Amazon`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500
  },
  {
    title: `$10 Amazon`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500
  },
  {
    title: `$20 Amazon`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500
  },
  {
    title: `Weekend Getaway - New York`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500
  },
  {
    title: `Weekend Getaway - Minneapolis`,
    image: 'http://www.upreshare.com/wp-content/uploads/2014/03/ducklings.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500
  },
  {
    title: `Weekend Getaway - Boston`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500
  },
  {
    title: `$5 Amazon`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500
  },
  {
    title: `$10 Amazon`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500
  },
  {
    title: `$20 Amazon`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500
  },
  {
    title: `Weekend Getaway - New York`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500
  },
  {
    title: `Weekend Getaway - Minneapolis`,
    image: 'http://www.upreshare.com/wp-content/uploads/2014/03/ducklings.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500
  },
  {
    title: `Weekend Getaway - Boston`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500
  },
  {
    title: `$5 Amazon`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500
  },
  {
    title: `$10 Amazon`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500
  },
  {
    title: `$20 Amazon`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500
  }
]