import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListasComponent} from './listas/listas.component';

@NgModule({
  declarations: [
      ListasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      ListasComponent
  ]
})
export class ComponentsModule { }
