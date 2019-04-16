import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: any[] = [];
  resources: any[] = [];

  userPoints = 5000;
  totalDays = 30;
  onTimePercent = 75;

  // totalDaysFormat = (days: number) => `${days} days`;
  // onTimePercentFormat = (percent: number) => `${percent} %`;

  ngOnInit() {
    this.data = marketLinks;
    this.resources = resources;
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

let stats = [
  {
    name: "Your Dashboard",
    items: [
      {
        title: "Points",
        subtitle: "Current Total Points",
        icon: "local_atm",
        description: "You currently have this amount of points. Head over to the marketplace to redeem.",
        value: 75,
        nextLevelValue: 95,
        button:
        {
          text: "Shop!",
          info: "This will provide employees with the opportunity to redeem rewards via a marketplace/shopping cart function. \n\n" +
            "A simple 3 click process! \n\n" +
            "Click 1: View reward details \n" +
            "Click 2: Add item to cart \n" +
            "Click 3: Redeem rewards."
        }
      },
      {
        title: "Tier Level",
        chartid: "tier",
        subtitle: "Current Rewards Levels",
        icon: "stars",
        description: "Employees will be categorized into tiers. These tiers motivate employees by providing tangible measures of progress. \n\n" +
          "A) Silver: After 2 weeks of employment, employees reach Silver status. \n\n" +
          "B) Gold: After 5 weeks of employment and an 75% on time rate, employees reach Gold status. \n\n" +
          "C) Platinum: After 9 weeks of employment and an 85% on time rate, employees reach Platinum status. \n",
        value: "Gold",
        nextLevelValue: 33,
        button:
        {
          text: "Details",
          info: "Employees will be categorized into tiers. These tiers motivate employees by providing tangible measures of progress. \n\n" +
            "A) Silver: After 2 weeks of employment, employees reach Silver status. \n\n" +
            "B) Gold: After 5 weeks of employment and an 75% on time rate, employees reach Gold status. \n\n" +
            "C) Platinum: After 9 weeks of employment and an 85% on time rate, employees reach Platinum status. \n"
        }
      },
      {
        title: "Days On-Time Streak",
        subtitle: "Consecutive Days with on-time clock in.",
        icon: "outlined_flag",
        description: "Number of days you have clocked in at or before your set arrival time.",
        value: 60,
        nextLevelValue: 80,
        button:
        {
          text: "Details",
          info: "On-time percentage goes into calculating tiers. \n\n" +
            "75% combined with 5 weeks worked will elevate an employee to Gold. \n\n" +
            "85% combined with 9 weeks worked will elevate an employee to Platinum."
        }
      },
      {
        title: "% On-Time",
        subtitle: "Percentage of on-time clock-ins.",
        icon: "alarm",
        description: "This will be calculated through the expected clock in time vs. the time card. With custom leway given.",
        value: 75,
        nextLevelValue: 90,
        button:
        {
          text: "Details",
          info: "On-time percentage goes into calculating tiers. \n\n" +
            "75% combined with 5 weeks worked will elevate an employee to Gold. \n\n" +
            "85% combined with 9 weeks worked will elevate an employee to Platinum."
        }
      },
      {
        title: "Referrals Processed",
        subtitle: "Number of referrals that have been processed successfully.",
        icon: "assignment_ind",
        description: "A referral will be awarded when an employee has sent an email and referred employee has sent in an application.",
        value: 5,
        button:
        {
          text: "Details",
          info: "A referral will be awarded when an employee has sent an email and referred employee has sent in an application."
        }
      }
    ]
  }
]