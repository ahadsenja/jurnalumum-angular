import { Component } from '@angular/core';

import { TokenStorageService } from './core/auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jurnalumum-angular';

  isLoggedIn = false;

  constructor(private token: TokenStorageService) {}

  ngOnInit() {
    if (this.token.getToken()) {
      this.isLoggedIn = true;
    }
  }
}
