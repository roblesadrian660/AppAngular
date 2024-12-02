import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../Interfaces/reqres.interface';

@Pipe({
  name: 'filterUserByName',
})
export class FilterUserByNamePipe implements PipeTransform {

  transform(users: User[], searchTerm: string):User[] {
    if (!users || !searchTerm || searchTerm.length <= 3) {
      return users;
    }
    return users.filter(user => user.first_name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
