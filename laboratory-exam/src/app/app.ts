
import { Component } from '@angular/core';
import { LoginPage } from './login-page/login-page';

@Component({
  selector: 'app-root',
  imports: [LoginPage],
  template: '<app-login-page></app-login-page>'
})
export class App {}
