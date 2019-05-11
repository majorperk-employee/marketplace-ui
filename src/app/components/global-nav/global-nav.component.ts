import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '@app/service/account.service';
import { Account } from '@app/models/account';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-global-nav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.scss']
})
export class GlobalNavComponent implements OnInit {

  user: Account;
  showNavBar: boolean = false;

  constructor(private router: Router, private accountService: AccountService) {
    this.user = accountService.currentAccount;
  }

  routeTo(destination) {
    console.log(destination);
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

  ngOnInit() { }
}