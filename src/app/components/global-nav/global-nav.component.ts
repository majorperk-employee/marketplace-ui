import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '@app/service/account.service';
import { Account } from '@app/models/account';

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
    this.router.navigate([destination]);
  }

  ngOnInit() { }
}