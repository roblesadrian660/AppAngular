import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from './shared/services/users/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})

export class CreateUserComponent implements OnInit {

  public response: any;
  public userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    job: new FormControl('', Validators.required),
  });

  constructor(
    private readonly router: Router,
    private usersService: UsersService
  ) {}

  ngOnInit(): void { }

  async  onSubmit() {
    try {
      if (this.userForm.valid) {
        const userData = this.userForm.value;
        const responseService = await this.usersService.createUser(userData);
        this.response = responseService;
        this.redirectToListUsers();
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  }

  /**
   * Este método no se puede modificar
   * */
  public redirectToListUsers(): void {
    this.router.navigateByUrl('/users/list');
  }
}
