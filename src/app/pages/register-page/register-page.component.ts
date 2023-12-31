import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCreate } from 'src/app/shared/models/User';
import { UserService } from 'src/app/shared/services/user.service';

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
  returnUrl!: string;
  user:UserCreate = {
    username: '',
    email: '',
    password: '',
    dateOfBirth: new Date()
  }

constructor(private userService:UserService, private router: Router, private route:ActivatedRoute){
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

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
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
