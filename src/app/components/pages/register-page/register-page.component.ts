import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationMessage, validationMessagesList } from 'src/app/models/enums/ValidationMessage';
import { UserCreate } from 'src/app/models/types/User';
import { UserService } from 'src/app/services/user.service';

export interface UserRegistration{
  username:string,
  email:string,
  password:string,
  dateOfBirth:Date
}
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})

export class RegisterPageComponent {
  formModel: FormGroup;
  isWrongDate: boolean = false;
  isUsedEmail: boolean = false;
  isDifferentPasswords: boolean = false;
  messages:ValidationMessage[]

constructor(private userService:UserService, private router: Router){
    this.messages=validationMessagesList()
    this.formModel = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      passwordGroup: new FormGroup({
        psd: new FormControl('', [
          Validators.required,
          Validators.minLength(6)
        ]),
        pconfirm: new FormControl('', [
         Validators.required,
         Validators.minLength(6)
        ]),
      }),
    });
  }

  registration(){
    this.isWrongDate = !this.formModel.valid;
    if (
      this.formModel.value.passwordGroup.psd !=
      this.formModel.value.passwordGroup.pconfirm
    ) {
      this.isDifferentPasswords = true;
      return;
    }
    this.isDifferentPasswords = false;

    if(this.formModel.valid){
      const user:UserCreate={
      email:this.formModel.value.email,
      username:this.formModel.value.username,
      password:this.formModel.value.passwordGroup.psd,
      dateOfBirth:new Date()
      }
      console.log(user)
      this.userService.createUser(user).subscribe((data)=>{console.log(data)})
      this.router.navigate(['/login']);
    }
  }
  get email() {
    return this.formModel.get('email');
  }

  get username() {
    return this.formModel.get('username');
  }

  get password() {
    return this.formModel.get('passwordGroup')?.get('psd');
  }

  get passwordConfirm() {
    return this.formModel.get('passwordGroup')?.get('pconfirm');
  }
}
