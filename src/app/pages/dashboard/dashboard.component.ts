import { Component, OnDestroy, OnInit, TemplateRef, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoModalComponent } from '@app/components/info/info.modal';
import { Account, Survey } from '@app/models/account';
import { Subscription } from 'rxjs';
import { RewardModalComponent } from '@app/components/reward-modal/reward-modal.component';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd';
import { RewardDrawerComponent } from '@app/components/reward-drawer/reward-drawer.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  data: any[] = [];
  resources: any[] = [];
  pointsDisplay: any;
  goalsModel: any;
  statsModel: any;

  id: number;
  name: string;
  firstname: string;

  userTier: string;
  userNextTier: string;

  userPoints: number;
  totalDays: number;
  absenteeism: number;

  totalDaysTarget: number;
  totalDaysCompletionPercent: number;

  absenteeismTarget: number;
  absenteeismCompletionPercent: number;

  tiers: any[];

  userSubscription: Subscription;


  done: boolean = false;
  survey: Survey;
  surveyResponse: number;
  surveyIndex: number = 0;

  constructor(private route: ActivatedRoute, private infoModal: InfoModalComponent, private drawerService: NzDrawerService) { }

  ngOnInit() {
    // this.survey = surveys[this.surveyIndex];
    this.tiers = tiers;
    this.getAccount();
    this.resources = resources;
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  private getAccount() {
    this.userSubscription = this.route.data.subscribe(data => {
      let account: Account = data.account;

      this.id = account.id;

      this.name = account.sandPMetrics.firstname + " " + account.sandPMetrics.lastname;
      this.firstname = account.sandPMetrics.firstname;

      this.userPoints = account.points;

      this.totalDays = +(account.sandPMetrics.prod_hours / 8).toFixed(2)
      this.totalDaysTarget = account.tier.totalDaysGoal;
      this.totalDaysCompletionPercent = (this.totalDaysTarget < this.totalDays) ? 100 : +Math.round(this.totalDays / this.totalDaysTarget * 100).toFixed(2);

      this.absenteeism = 1 - account.sandPMetrics.abstenteeism;
      this.absenteeismTarget = account.tier.absenteeismGoal;
      this.absenteeismCompletionPercent = (this.absenteeismTarget < this.absenteeism) ? 100 : +Math.round(this.absenteeism / this.absenteeismTarget * 100).toFixed(2);

      this.userTier = account.tier.currentTier;
      this.userNextTier = account.tier.nextTier;

      this.statsModel = this.generateStatsModal(this.totalDays);

      this.goalsModel = this.generateGoalsModal(this.totalDays, this.absenteeism);
    });
  }

  private generateGoalsModal(tdw: number, otp: number) {
    return [
      { name: "Total Days Worked", value: tdw, needed: this.totalDaysTarget, complete: tdw > this.totalDaysTarget },
      { name: "On Time Percentage", value: +otp.toFixed(2), needed: this.absenteeismTarget, complete: otp > this.absenteeismTarget }
    ]
  }

  private generateStatsModal(tdot: number) {
    return [
      { name: "Total Days On Time", value: tdot },
    ]
  }

  openRewardLinkComponent(): void {
    const drawerRef = this.drawerService.create<RewardDrawerComponent, { points: number }, string>({
      nzContent: RewardDrawerComponent,
      nzContentParams: {points: this.userPoints}
    });

    drawerRef.afterOpen.subscribe(() => { });

    drawerRef.afterClose.subscribe(data => { });
  }


  openModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>) {
    this.infoModal.createTemplatedModal(tplTitle, tplContent, tplFooter);
  }

  closeModal() {
    this.infoModal.destroyTemplatedModal();
  }

}

let tiers = [
  {
    title: "Platinum",
    requirements: ["Total Days: 120", "Absenteeism Percent: 95%"],
    benefits: ["$1 = 45 points"],
    current: false
  },
  {
    title: "Gold",
    requirements: ["Total Days: 90", "Absenteeism Percent: 90%"],
    benefits: ["$1 = 50 points"],
    current: false
  },
  {
    title: "Silver",
    requirements: ["Total Days: 60", "Absenteeism Percent: 85%"],
    benefits: ["$1 = 55 points"],
    current: false
  },
  {
    title: "Employee",
    requirements: ["Just be who you are! We are glad that you're here."],
    benefits: ["$1 = 60 points"],
    current: false
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