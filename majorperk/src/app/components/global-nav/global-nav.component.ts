import { Component } from '@angular/core';

@Component({
  selector: 'app-global-nav',
  templateUrl: './global-nav.component.html',
  styles: [
    `
      .logo {
        width: 120px;
        height: 31px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px 24px 16px 0;
        float: left;
      }
    `
  ]
})
export class GlobalNavComponent {}