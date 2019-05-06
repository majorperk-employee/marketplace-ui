import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoModalComponent } from '@app/components/info/info.modal';
import { Account, Survey } from '@app/models/account';
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

  totalDaysTarget: number;
  totalDaysCompletionPercent: number;

  onTimePercentTarget: number;
  onTimePercentCompletionPercent: number;

  array = ["Welcome to MajorPerk!", "KPIs, rewards, resources, and more!"];

  userSubscription: Subscription;


  surveys;
  surveyIndex = 0;

  constructor(private route: ActivatedRoute, private infoModal: InfoModalComponent) { }

  ngOnInit() {
    this.surveys = surveys
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
      this.totalDaysTarget = account.tier.totalDaysGoal;

      this.totalDaysCompletionPercent = (this.totalDaysTarget < account.totaldays) ? 100 : Math.round(account.totaldays / this.totalDaysTarget * 100);

      this.userTier = account.tier.currentTier;
      this.userNextTier = account.tier.nextTier;
      this.onTimePercentCompletionPercent = account.tier.onTimePercentGoal * 100;

      this.pointsDisplay = this.generatePointsDisplay(this.userPoints, this.userPoints, this.userPoints);
      this.statsModel = this.generateStatsModal(account.totaldays, account.ontimedays, this.onTimePercent);
    });
  }

  private generatePointsDisplay(pts: number, Ypts: number, Ppts: number) {
    return [
      { title: "Available Points", value: pts },
      // { title: "Earned Yesterday", value: Ypts},
      // { title: "Earned this Period", value: Ppts}
    ]
  }

  private generateStatsModal(tdw: number, tdot: number, otp: number) {
    return [
      { name: "Total Days On Time", value: tdot, needed: null, complete: false },
      { name: "Total Days Worked", value: tdw, needed: this.totalDaysTarget, complete: false },
      { name: "On Time Percentage", value: otp, needed: this.onTimePercentTarget, complete: false }
    ]
  }

  openModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>) {
    this.infoModal.createTemplatedModal(tplTitle, tplContent, tplFooter);
  }

  closeModal() {
    this.infoModal.destroyTemplatedModal();
  }

}

let surveys: Survey[] =
  [
    {
      period: 0,
      duration: "After First Day",
      question: "Did you feel comfortable in your new work environment?",
      options: [1,2,3,4,5],
      scale: "[1] Not at all. [5] Very much so."
    },
    {
      period: 0,
      duration: "After First Day",
      question: "Did you find your first day of training worthwhile?",
      options: [1,2,3,4,5],
      scale: "[1] Not at all. [5] Very much so."
    },
    {
      period: 0,
      duration: "After First Day",
      question: "Were people friendly?",
      options: [1,2,3,4,5],
      scale: "[1] Not at all. [5] Very much so."
    },

    {
      period: 1,
      duration: "After first week",
      question: "Do you feel you’re being well trained?",
      options: [1,2,3,4,5],
      scale: "[1] Not at all. [5] Very much so."
    },
    {
      period: 1,
      duration: "After first week",
      question: "Would you recommend S&P as a place to work?",
      options: [1,2,3,4,5],
      scale: "[1] Not at all. [5] Very much so."
    },
    {
      period: 1,
      duration: "After first week",
      question: "Do you feel comfortable approaching your manager and having an honest discussion about your job and your opportunities for advancement?",
      options: [1,2,3,4,5],
      scale: "[1] Not at all. [5] Very much so."
    },

    {
      period: 2,
      duration: "After second week",
      question: "Do you see a path to advance your career at S&P?",
      options: [1,2,3,4,5],
      scale: "[1] Not at all. [5] Very much so."
    },
    {
      period: 2,
      duration: "After second week",
      question: "Are you learning and developing new skills?",
      options: [1,2,3,4,5],
      scale: "[1] Not at all. [5] Very much so."
    },
    {
      period: 2,
      duration: "After second week",
      question: "Does your manager provide you with the support you need to complete your work?",
      options: [1,2,3,4,5],
      scale: "[1] Not at all. [5] Very much so."
    },

    {
      period: 3,
      duration: "After first month",
      question: "How would you rate your first month at S&P?",
      options: [1,2,3,4,5],
      scale: "[1] Awful. [5] Fantastic."
    },
    {
      period: 3,
      duration: "After first month",
      question: "Can you have well-informed and constructive conversations with your manager about growth opportunities and pay?",
      options: [1,2,3,4,5],
      scale: "[1] Not at all. [5] Very much so."
    },
    {
      period: 3,
      duration: "After first month",
      question: "Do you find your work challenging?",
      options: [1,2,3,4,5],
      scale: "[1] Not at all. [5] Very much so."
    },

    {
      period: 4,
      duration: "After second month",
      question: "If you were offered the same job at another call center, how likely is it that you would stay with S&P?",
      options: [1,2,3,4,5],
      scale: "[1] Very Unlikely. [5] Very likely."
    },
    {
      period: 4,
      duration: "After second month",
      question: "Do you believe you are fairly rewarded in terms of pay and opportunities for advancement at S&P?",
      options: [1,2,3,4,5],
      scale: "[1] Not at all. [5] Very much so."
    },
    {
      period: 4,
      duration: "After second month",
      question: "How would you rate the S&P culture?",
      options: [1,2,3,4,5],
      scale: "[1] Awful. [5] Fantastic."
    },
    {
      period: 4,
      duration: "After second month",
      question: "Would you recommend S&P as a place to work? ",
      options: [1,2,3,4,5],
      scale: "[1] Not at all. [5] Very much so."
    },

    {
      period: 5,
      duration: "After third month",
      question: "Are you inspired by the purpose and mission of S&P?",
      options: [1,2,3,4,5],
      scale: "[1] Not at all. [5] Very much so."
    },
    {
      period: 5,
      duration: "After third month",
      question: "Does your manager provide you with the support you need to complete your work?",
      options: [1,2,3,4,5],
      scale: "[1] Not at all. [5] Very much so."
    },
    {
      period: 5,
      duration: "After third month",
      question: "Do you feel S&P gives you opportunity for professional growth?",
      options: [1,2,3,4,5],
      scale: "[1] Not at all. [5] Very much so."
    },
    {
      period: 5,
      duration: "After third month",
      question: "How valued do you feel at S&P?",
      options: [1,2,3,4,5],
      scale: "[1] Not at all. [5] Very much."
    },

    

    
  ]

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