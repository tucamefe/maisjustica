import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  getErrorMessage() {
    return this.profileForm.value.email.hasError('required') ? 'You must enter a value' :
    this.profileForm.value.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  login() {
    if(this.profileForm.value.email === 'abc@email.com') {
      this.router.navigate(['/processos']);
    } else {
      this.router.navigate(['/processovazio']);
    }

    
  }

}
