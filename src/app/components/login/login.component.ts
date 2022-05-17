import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'volcani-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  subscription!: Subscription;
  isDisplayForm : boolean = true; 

  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) {
  }

  ngOnInit() {
    this.initLoginFrom();
   
  }
  
  private initLoginFrom() {
    this.loginForm = this.formBuilder.group({
      idNumber: ['', [Validators.required,  Validators.minLength(9) , Validators.maxLength(9)]],
      email: ['', [Validators.required]],
    });
  
  }


  async login() {
    debugger;
    try {
      this.isDisplayForm = false;
      await this.authService.login(this.loginForm.controls.email.value).toPromise();
      // this.router.navigate([``]);
    }
    catch (error) {
      this.initForm();
    }
  }
  private initForm() {
    this.loginForm.reset();
    this.isDisplayForm = true;
  }


  ngOnDestroy() {
    this.isDisplayForm = false;
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}



