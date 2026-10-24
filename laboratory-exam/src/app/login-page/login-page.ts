
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  username = '';
  password = '';
  showPassword = false;
  message = '';

  login() {
    if (this.username.trim() && this.password) {
      this.message = `Welcome, ${this.username}!`;
    } else {
      this.message = 'Please enter your username and password.';
    }
  }
}
