import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public isCad = false;
  private user: any;
  public loading = false;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
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
    this.loading = true;
    const log = (await this.auth.login(this.loginForm.value));
    log.subscribe(res => {
      sessionStorage.setItem('userData' ,JSON.stringify(res))
    })
    this.loginForm.reset();
    this.loading = false;
    this.router.navigate(['home'])
    return this.user;
  }

  async register() {
    this.loading = true;
    const user = await this.auth.register(this.registerForm.value);
    this.isCad = false;
    this.loading = false;
    this.registerForm.reset();
    return user;
  }
  
  changeCad(){
    this.isCad = !this.isCad;
  }

}
