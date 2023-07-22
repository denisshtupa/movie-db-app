// shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './general-components/spinner/spinner.component';
import { PaginatorComponent } from './general-components/paginator/paginator.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    PaginatorComponent
  ]
})
export class SharedModule { }
