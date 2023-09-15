import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthResponse, Login } from 'src/app/models/types/User';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';
import { ControlProp, onControlChange } from 'src/app/models/types/Control';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent {
  formModel: FormGroup;
  isWrongData: boolean = false;
  @Input() returnUrl!: string;

  constructor(private userService:UserService, private accountService:AccountService,
    private router:Router, private tokenService:TokenService, private route:ActivatedRoute){
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
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(){
    console.log(this.formModel)
    if(this.formModel.valid){
      const user:Login = {
        email:this.email?.value,
        password:this.password?.value
      }

      this.userService.login(user)
      .subscribe
      ({
        next: (res: AuthResponse) => {
          console.log(res)
          this.tokenService.set(res.token);
          //this.notificationService.showSuccess( this.transloco.translate('notification.loggedIn'), "Success");
          this.router.navigate(['/start']);
        },
        error: (err: any) => {
          console.log(err)
          //this.errorMessage = "Incorrect email address or password";
          //this.notificationService.showError( this.transloco.translate('notification.loggedInFail'), "Failed");
          //this.showError = true;
          //this.loading = true;
        }
      })

      // this.userService.loginUser(user).subscribe(data=>{
      //   this.tokenService.set(String(data.id))
      //   this.router.navigate(['/workpiece-results'])
      // })
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
