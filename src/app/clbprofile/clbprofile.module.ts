import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClimblistComponent } from './climblist/climblist.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { PipesModuleModule } from '../pipes-module/pipes-module.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ClimblistComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    PipesModuleModule,
    RouterModule
  ]
})
export class ClbprofileModule { }
