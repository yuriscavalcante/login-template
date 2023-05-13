import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public isCad = false
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService
  ){}
    loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      userName: ['', Validators.required],
      fullName: ['', Validators.required],
    })

  ngOnInit() {
  }

  async login(){
    const user = await this.auth.login(this.loginForm.value);
    console.log(user)
    this.isCad = true;
    return user;
  }

  async register() {
    const user = await this.auth.register(this.registerForm.value);
    this.isCad = false;
    return user;
  }
  changeCad(){
    this.isCad = !this.isCad;
  }
}
