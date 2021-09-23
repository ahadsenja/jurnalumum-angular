import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/core/auth/token-storage.service';

import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    email: '',
    password: ''
  }

  isLoggedIn = false;
  userInfo: string[] = [];

  constructor(
    private authService: AuthService,
    private token: TokenStorageService,
    private location: Location
  ) { }

  ngOnInit(): void {
    if (this.token.getToken() !== null) {
      this.isLoggedIn = true;
    }
  }

  onSubmit() {
    const { email, password } = this.form;

    if (email !== '' && password !== '') {
      this.authService.login(email, password).subscribe(data => {
        this.isLoggedIn = true;
        this.token.saveToken(data.access_token);
        console.log(data);
        console.log('Test login button');
        this.location.replaceState('/');
        window.location.reload();
      })
    }
  }
}
