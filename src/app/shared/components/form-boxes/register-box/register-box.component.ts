import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCreate } from 'src/app/shared/models/User';
import { AccountService } from 'src/app/shared/services/account.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register-box',
  templateUrl: './register-box.component.html',
  styleUrls: ['./register-box.component.css']
})
export class RegisterBoxComponent {
  @Input() returnUrl!:string
  formModel: FormGroup;
  isWrongDate: boolean = false;
  isUsedEmail: boolean = false;
  isDifferentPasswords: boolean = false;
  isError:boolean=false

constructor(private userService:UserService,  private accountService:AccountService, private router: Router){
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
      birthDate: new FormControl(new Date(String(new Date().getFullYear()-15)+"-01-01"))
    });
  }

  registration(){
    if(!this.formModel.valid || this.password.value != this.passwordConfirm.value){
      this.isError = true
      return
    }
      const user:UserCreate={
      email:this.formModel.value.email,
      username:this.formModel.value.username,
      password:this.formModel.value.passwordGroup.psd,
      dateOfBirth:this.birthDate.value
      }
      console.log(user)
      this.userService.register(user)
        .subscribe({
          next: (res: any) => {
            console.log(res)
          },
          error: (err: any) => {
            console.log(err)
            //this.notificationService.showSuccess( this.transloco.translate('notification.registered'), "Success");
            //this.router.navigate([this.returnUrl]);
          }
        })
      //this.accountService.register(user).subscribe((data)=>{console.log(data)})
      this.router.navigate(['/login']);
  }
  get email() {
    return this.formModel.get('email') as FormControl;
  }

  get username() {
    return this.formModel.get('username') as FormControl;
  }

  get password() {
    return this.formModel.get('passwordGroup')?.get('psd') as FormControl;
  }

  get passwordConfirm() {
    return this.formModel.get('passwordGroup')?.get('pconfirm') as FormControl;
  }

  get birthDate() {
    return this.formModel.get('birthDate') as FormControl;
  }
}
