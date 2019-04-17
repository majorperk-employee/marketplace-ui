import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {

  data: any[] = [];

  constructor() { }

  ngOnInit() {
    this.data = marketLinks;
  }
}

let marketLinks = [
  {
    href: "/marketplace/travel",
    title: `Travel`,
    avatar: '',
    description: 'Redeem rewards points towards a vacation',
  },
  {
    href: "/marketplace/gift card",
    title: `Gift Cards`,
    avatar: '',
    description: 'Turn those rewards points into credit at your favorite store',
  },
  {
    href: "/marketplace/fitness",
    title: `Fitness`,
    avatar: '',
    description: 'Reward your body with rewards points',
  },
  {
    href: "/marketplace/electronics",
    title: `Electronics`,
    avatar: '',
    description: 'Reward yourself with new gadgets',
  },
  {
    href: "/marketplace/transportation",
    title: `Transportation`,
    avatar: '',
    description: 'Give your rewards some miles',
  },
  {
    href: "/userprofile/redeem",
    title: `Cash Out`,
    avatar: '',
    description: 'Redeem your points for a VISA gift card',
  }
]

let resources = [
  {
    display: "Affordable Housing Partners",
    url: "https://www.toronto.ca/community-people/community-partners/affordable-housing-partners/",
    description: "Toronto affordable housing partners, locate homes and new developments in the area."
  },
  {
    display: "Child Care & Before-After School Program Locator",
    url: "https://www.toronto.ca/community-people/children-parenting/children-programs-activities/licensed-child-care/child-care-locator/",
    description: "Search for a licensed child care or a before-after school program in Toronto."
  }
]
