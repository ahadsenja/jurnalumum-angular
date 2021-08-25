import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { 
  faTachometerAlt, 
  faBookOpen, 
  faWallet, 
  faPowerOff 
} from '@fortawesome/free-solid-svg-icons';

import { TokenStorageService } from '../../../core/auth/token-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  tachometer = faTachometerAlt;
  bookopen = faBookOpen;
  wallet = faWallet;
  poweroff = faPowerOff;

  constructor(
    private token: TokenStorageService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  doLogout() {
    this.token.logout();
    this.location.replaceState('/login')
    window.location.reload();
  }

}
