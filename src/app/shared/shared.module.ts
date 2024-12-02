import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterUserByNamePipe } from '@shared/pipes/filter-user-by-name/filter-user-by-name.pipe';
import { ImagesUserPipe } from './pipes/images-user/images-user.pipe';

@NgModule({
  declarations: [
     FilterUserByNamePipe,
     ImagesUserPipe
  ],
  imports:[CommonModule],
  exports:[
    FilterUserByNamePipe,
    ImagesUserPipe
  ]
})

export class SharedModule {
}
