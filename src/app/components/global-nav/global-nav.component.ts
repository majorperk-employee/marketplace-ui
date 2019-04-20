import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-global-nav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.scss']
})
export class GlobalNavComponent implements OnInit{
  constructor(private router: Router) { }
 
  user: any;

  routeTo(destination) {
    this.router.navigate([destination]);
  }

  ngOnInit() { 
    this.user = user;
  }
}

let user = {
  firstName: "Sergei Hanka"
}