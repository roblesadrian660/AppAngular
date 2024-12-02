import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../../Interfaces/reqres.interface';

@Pipe({
  name: 'imagesUser'
})

export class ImagesUserPipe implements PipeTransform {
  transform(usuario: User): string {
    if(!usuario.avatar){
      return 'assets/images/no-image.png';
    }
    return usuario.avatar;
  }
}
