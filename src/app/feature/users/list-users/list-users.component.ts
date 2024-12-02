import { Component, OnInit } from '@angular/core';
import { User, PaginatedResponse } from '../../../shared/Interfaces/reqres.interface';
import { UsersService } from '../create-user/shared/services/users/users.service';

@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {

  public users: User[] = [];
  public searchTerm: string = '';

  constructor(private usersService: UsersService) { }

  async ngOnInit(){
    try {
      const respuesta: PaginatedResponse = await this.usersService.getUsers();
      this.users = respuesta.data;
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
    }
  }

  filterUsers(event: any): void {
    this.searchTerm = event.target.value;
    console.log( this.searchTerm);
  }

  async deleteUser(index: number) {
    try {
      const userToDelete = this.users[index];
      this.users.splice(index, 1);

      await this.usersService.deleteUserForIndex(userToDelete.id);
    }catch (error) {
      console.error('Error al obtener los usuarios:', error);
    }
  }
}
