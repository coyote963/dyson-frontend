import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtflayoutComponent } from './ctflayout/ctflayout.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { PipesModuleModule } from '../pipes-module/pipes-module.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [CtflayoutComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatTableModule,
    PipesModuleModule,
    MatPaginatorModule,
    MatIconModule,
  ]
})
export class CtfprofileModule { }
