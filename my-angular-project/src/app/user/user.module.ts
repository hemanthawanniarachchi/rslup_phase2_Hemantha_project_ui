// user.module.ts

import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [MatTableModule],
})
export class UserModule {}
