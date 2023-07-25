import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationMessage, validationMessagesList } from 'src/app/models/enums/ValidationMessage';
import { UserService } from 'src/app/services/user.service';
import { UserRegistration } from '../register-page/register-page.component';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

}
