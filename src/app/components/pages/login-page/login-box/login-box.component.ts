import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationMessage, validationMessagesList } from 'src/app/models/enums/ValidationMessage';
import { Login } from 'src/app/models/types/User';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';
import { ControlProp, onControlChange } from 'src/app/models/types/Control';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent {
  formModel: FormGroup;
  isWrongData: boolean = false;
  messages:ValidationMessage[]

  constructor(private userService:UserService, private router:Router, private tokenService:TokenService){
    this.messages=validationMessagesList()
    this.formModel = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      psd: new FormControl('', [
         Validators.required,
         Validators.minLength(6)
      ])
    });
  }

  login(){
    console.log(this.formModel)
    if(this.formModel.valid){
      const user:Login = {
        email:this.email?.value,
        password:this.password?.value
      }
      this.userService.loginUser(user).subscribe(data=>{
        this.tokenService.set(String(data.id))
        this.router.navigate(['/workpiece-results'])
      })
    }
    else{
      this.isWrongData=true
    }
  }

  // onControlChange(formControl: FormControl, formControlValue: any){
  //   formControlValue = formControl.value
  // }

  get email() {
    return this.formModel.get('email') as FormControl;
  }

  get password() {
    return this.formModel.get('psd') as FormControl;
  }
}
