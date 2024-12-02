import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit{

  email: string = '';
  password: string = '';
  errorPasswordMessage:  string = '';
  emailInvalid: boolean = false;
  passwordInvalid: boolean = false;
  errorMessage: string = '';

  constructor(
    private loginService: LoginService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if(token ) this.redirectUsers();
  }

  public async onLogin(): Promise<void> {
    if (!this.validateForm()) return;

  try {
      const response = await this.loginService.login(this.email, this.password);
      const token = response.token;
      if (token) {
        localStorage.setItem('token', token);
        this.redirectUsers();
      }
    } catch (error) {
        this.errorMessage = "Usuario o contraseña incorrecta";
    }
  }

  private validateForm(): boolean {
    this.errorMessage = '';
    this.errorPasswordMessage = '';
    this.emailInvalid = false;
    this.passwordInvalid = false;
    var resultado = true;

    if(this.email == ''){
      this.emailInvalid = true;
      resultado= false;
    }

    if(this.password == ''){
      this.passwordInvalid = true;
      this.errorPasswordMessage ='Password is required';
      resultado =  false;
    }
    else if(this.password.length <8){
      this.passwordInvalid = true;
      this.errorPasswordMessage ='The minimum of characters will be 8';
      resultado=  false;
    }

    return resultado;
  }

  /**
   * Este método no se puede modificar
   * */
  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }

}
