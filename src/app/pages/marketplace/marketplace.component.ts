import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {

  search: string = "";
  sort: number = 1;
  tags: string[] = [];

  isCollapsed = false;

  itemCount: number = 0;
  pageSize: number = 20;

  pageIndex = 1;
  allRewards: any[];
  marketItems: any[] = [];

  categories: any[] = [];
  constructor() { }

  ngOnInit() {
    this.categories = categories;
    this.allRewards = marketItems;
    this.marketItems = marketItems;
    this.loadData(this.pageIndex);
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
    this.tags = this.tags.filter(function (item) {
      return item != removeTag;
    });
    this.applyFilter();
    this.pageIndex = 1;
    this.loadData(1);
  }

  applySort(sort: number, list: any[]) {
    switch (sort) {
      case 1:
        return list.sort((a, b) => { return a.title.localeCompare(b.title) });
      case 2:
        return list.sort((a, b) => { return a.price - b.price });
    }
  }

  applySearch(item): boolean {
    if (item.title.toLowerCase().includes(this.search.toLowerCase())) {
      return true;
    };
    return false;
  }

  applyTags(item): boolean {
    let tagged: boolean = false;
    if(item.tags) {
      this.tags.forEach(tag => {
        if (item.tags.indexOf(tag) > -1) {
          tagged = true;
        }
      });
    }
    return tagged;
  }

  applyFilter(): any[] {
    let filtered = this.allRewards.filter(item => {
      if(this.search != "" && this.tags.length > 0) {
        if (this.applySearch(item) || this.applyTags(item)) {
          return item;
        }
      } else if(this.tags.length < 1 && this.search != "") {
        if (this.applySearch(item)) {
          return item;
        }
      } else if(this.tags.length > 0 && this.search == ""){
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

}

let marketItems = [
  {
    title: `Amazon1`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Amazon2`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Amazon3`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Amazon4`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Amazon5`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Amazon6`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Amazon7`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Amazon8`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Amazon9`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Amazon10`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Fitness1`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Fitness2`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Fitness3`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Fitness4`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Fitness5`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Uber1`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Uber2`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Uber3`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Uber4`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Many Tags`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `All Tags`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Weekend Getaway - Boston`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Lyft`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Lyft`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Lyft`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Lyft`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Lyft`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Lyft`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Lyft`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Lyft`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Lyft`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Lyft`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Lyft`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Lyft`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Lyft`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Lyft`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `iPhone7`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `iPhone7`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `iPhone7`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `iPhone7`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `iPhone7`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `iPhone7`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Fitbit`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Fitbit`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Fitbit`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Fitbit`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Fitbit`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Fitbit`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Fitbit`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `1000 SkyMiles`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `1000 SkyMiles`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `1000 SkyMiles`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `1000 SkyMiles`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `1000 SkyMiles`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: [],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Gift Cards`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: ["Fast Food", "Convinience Store", "Gas"],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Transport`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: ["Metro", "Bus", "Uber", "Lyft"],
    meta: {
      purchased: 0,
      clicked: 0
    }
  },
  {
    title: `Food & Drink`,
    image: 'https://www.folkmanis.com/DSN/wwwfolkmaniscom/Commerce/ProductImages/mn1_000288.jpg',
    description: 'Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.',
    price: 500,
    tags: ["Coffee", "Fast-Casual", "Fast Food", "Restaurant"],
    meta: {
      purchased: 0,
      clicked: 0
    }
  }

]

let categories = [
  {
    icon: "icon",
    name: "Gift Cards",
    tags: ["Fast Food", "Convinience Store", "Gas"]
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