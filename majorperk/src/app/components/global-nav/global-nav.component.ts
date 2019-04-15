import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-global-nav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.scss']
})
export class GlobalNavComponent {
  constructor(private router: Router) { }
  routeTo(destination) {
    this.router.navigate([destination]);
  }
}