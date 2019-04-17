import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {

  isCollapsed = false;

  marketItems: any[] = [];

  constructor() { }

  ngOnInit() {
    this.marketItems = marketItems;
  }
}

let marketItems = [
  {
    title: `Weekend Getaway - New York`,
    image: 'https://images-na.ssl-images-amazon.com/images/I/6101Je6svzL._SX425_.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
  },
  {
    title: `Weekend Getaway - Minneapolis`,
    image: 'http://exclaim.ca/images/dabbing.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
  },
  {
    title: `Weekend Getaway - Boston`,
    image: 'https://images-na.ssl-images-amazon.com/images/I/6101Je6svzL._SX425_.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
  },
  {
    title: `$5 Amazon`,
    image: 'https://images-na.ssl-images-amazon.com/images/I/6101Je6svzL._SX425_.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
  },
  {
    title: `$10 Amazon`,
    image: 'https://images-na.ssl-images-amazon.com/images/I/6101Je6svzL._SX425_.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
  },
  {
    title: `$20 Amazon`,
    image: 'https://images-na.ssl-images-amazon.com/images/I/6101Je6svzL._SX425_.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
  },
  {
    title: `Weekend Getaway - New York`,
    image: 'https://images-na.ssl-images-amazon.com/images/I/6101Je6svzL._SX425_.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
  },
  {
    title: `Weekend Getaway - Minneapolis`,
    image: 'http://exclaim.ca/images/dabbing.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
  },
  {
    title: `Weekend Getaway - Boston`,
    image: 'https://images-na.ssl-images-amazon.com/images/I/6101Je6svzL._SX425_.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
  },
  {
    title: `$5 Amazon`,
    image: 'https://images-na.ssl-images-amazon.com/images/I/6101Je6svzL._SX425_.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
  },
  {
    title: `$10 Amazon`,
    image: 'https://images-na.ssl-images-amazon.com/images/I/6101Je6svzL._SX425_.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
  },
  {
    title: `$20 Amazon`,
    image: 'https://images-na.ssl-images-amazon.com/images/I/6101Je6svzL._SX425_.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
  },
  {
    title: `Weekend Getaway - New York`,
    image: 'https://images-na.ssl-images-amazon.com/images/I/6101Je6svzL._SX425_.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
  },
  {
    title: `Weekend Getaway - Minneapolis`,
    image: 'http://exclaim.ca/images/dabbing.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
  },
  {
    title: `Weekend Getaway - Boston`,
    image: 'https://images-na.ssl-images-amazon.com/images/I/6101Je6svzL._SX425_.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
  },
  {
    title: `$5 Amazon`,
    image: 'https://images-na.ssl-images-amazon.com/images/I/6101Je6svzL._SX425_.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
  },
  {
    title: `$10 Amazon`,
    image: 'https://images-na.ssl-images-amazon.com/images/I/6101Je6svzL._SX425_.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
  },
  {
    title: `$20 Amazon`,
    image: 'https://images-na.ssl-images-amazon.com/images/I/6101Je6svzL._SX425_.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
  }
]