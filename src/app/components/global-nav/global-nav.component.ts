import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '@app/models/account';
import { AccountService } from '@app/service/account.service';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { RewardLinkResponse } from '@app/models/tango';

@Component({
  selector: 'app-global-nav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.scss']
})
export class GlobalNavComponent implements OnInit {

  user: Account;
  showNavBar: boolean = false;
  loadingRewardLinks = false;

  rewardLinks: RewardLinkResponse[];

  constructor(private router: Router, private accountService: AccountService) {
    this.user = accountService.currentAccount;
  }

  routeTo(destination) {
    if (destination == "manager") {
      window.location.href = (`${environment.managerConsoleUrl}`);
      return false;
    } else if (destination == "login") {
      window.location.href = (`${environment.loginUrl}`);
      return false;
    } else {
      this.router.navigate([destination]);
      return false;
    }

  }

  ngOnInit() {
    this.loadingRewardLinks = true;
    this.loadRewardLinks();
  }

  loadRewardLinks() {
    this.rewardLinks = this.user.rewardLinks;
    this.loadingRewardLinks = false;
  }

  navigate(link: String) {
    console.log("Linked to: " + link);
  }

}