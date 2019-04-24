import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoModalComponent } from '@app/components/info/info.modal';
import { Account } from '@app/models/account';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  data: any[] = [];
  resources: any[] = [];
  pointsDisplay: any;
  statsModel: any;

  name: string;

  userTier: string;
  userNextTier: string;

  userPoints: number;
  totalDays: number;
  onTimePercent: number;

  totalDaysTarget = 100;
  totalDaysCompletionPercent: number;

  onTimePercentTarget = 100;
  onTimePercentCompletionPercent: number;

  array = ["Welcome to MajorPerk!", "KPIs, rewards, resources, and more!"];

  userSubscription: Subscription;

  constructor(private route: ActivatedRoute, private infoModal: InfoModalComponent) { }

  ngOnInit() {
    this.getAccount();

    this.data = marketLinks;
    this.resources = resources;
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  private getAccount() {
    this.userSubscription = this.route.data.subscribe(data => {
      let account: Account = data.account;
      
      this.name = account.firstName + " " + account.lastName;

      this.userPoints = account.points;
      
      this.totalDays = account.totaldays;
      this.totalDaysCompletionPercent = Math.round(account.totaldays / this.totalDaysTarget * 100) > 100 ? 100 : Math.round(account.totaldays / this.totalDaysTarget * 100);

      this.onTimePercent = Math.round(account.ontimedays / account.totaldays * 100);
      this.onTimePercentCompletionPercent = (this.onTimePercent / this.onTimePercentTarget * 100);

      this.userTier = account.tier;
      this.userNextTier = "Gold"
      this.pointsDisplay = this.generatePointsDisplay(this.userPoints,this.userPoints,this.userPoints);
      this.statsModel = this.generateStatsModal(account.totaldays,account.ontimedays,this.onTimePercent);
    });
  }

  private generatePointsDisplay(pts: number,Ypts: number,Ppts: number) {
    return [
      { title: "Available Points", value: pts},
      { title: "Earned Yesterday", value: Ypts},
      { title: "Earned this Period", value: Ppts}
    ]
  }

  private generateStatsModal(tdw: number,tdot: number,otp: number) {
    return [
      { name: "Total Days On Time", value: tdot, needed: null, complete: false},
      { name: "Total Days Worked", value: tdw, needed: 500,complete: false},
      { name: "On Time Percentage", value: otp, needed: 85, complete: false}
    ]
  }

  openModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>) {
    this.infoModal.createTemplatedModal(tplTitle,tplContent,tplFooter);
  }

  closeModal() {
    this.infoModal.destroyTemplatedModal();
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