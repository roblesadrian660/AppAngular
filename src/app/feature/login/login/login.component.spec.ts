import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from '@feature/login/login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '@feature/login/shared/services/login/login.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginResponse } from '../../../shared/Interfaces/responseLogin.interface';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: LoginService;
  let redirectPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [LoginService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginService = TestBed.inject(LoginService);
    localStorage.clear();
    fixture.detectChanges();
    redirectPage = spyOn(component, 'redirectUsers');
  });

  it('should validate email incorrect', fakeAsync(async () => {

    const loginResponse: LoginResponse = { token: 'fake-token' };
    spyOn(loginService, 'login').and.returnValue(Promise.resolve(loginResponse));

    component.email = '';
    component.password = 'password123';
    await component.onLogin();

    expect(component.emailInvalid).toBeTruthy();

  }));

  it('should login success', fakeAsync(async () => {
    const loginResponse: LoginResponse = { token: 'fake-token' };
    spyOn(loginService, 'login').and.returnValue(Promise.resolve(loginResponse));
   
    component.email = 'pruebas@gmail.com';
    component.password = 'password123';

   await component.onLogin();

    expect(localStorage.getItem('token')).toEqual('fake-token');
    expect(redirectPage).toHaveBeenCalled();
  }));
});
