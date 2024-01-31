import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  isSignUp = false; 
  msg:any;
  authForm: any;
  RegisterForm : any ;
  
  constructor(private authService:AuthService, private formBuilder:FormBuilder,private router: Router){}
  ngOnInit(): void {
   this.authForm=this.formBuilder.group({
    signInEmail:['',[Validators.email,Validators.required]],
    signInPassword:['',Validators.required]
  }) ;
  this.RegisterForm=this.formBuilder.group({
    signUpName:['',Validators.required],
    signUpEmail:['',[Validators.email,Validators.required]],
    signUpPassword:['',Validators.required]
  }) ;
  }
  toggleSignUp() {
    this.isSignUp = !this.isSignUp;
  }

  
  onSignIn() {
    this.msg = undefined;
    const formValues = this.authForm.value;
    this.authService.checkAuth(formValues.signInEmail, formValues.signInPassword)
      .subscribe(
        (res) => {
          console.log(res);
          
          this.router.navigate(["home"]);
          this.authForm.reset();
        },
        (error) => {
          this.msg = error.error.message;
        }
      );
  
  }

  onSignUp() {
    this.msg = undefined;
    const formValues = this.RegisterForm.value;
    this.authService.Signup(formValues.signUpName,formValues.signUpEmail,formValues.signUpPassword).subscribe((res)=>{
      console.log(res);
      this.RegisterForm.reset();
      this.toggleSignUp();
      alert("Registred successfully");
    },
    (error) => {
      this.msg = error.error.message;
    }
    );
  }


}
