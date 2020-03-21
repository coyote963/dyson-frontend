import { NgModule } from '@angular/core';

import { PlayerTableComponent } from './player-table/player-table.component';
import { DmTableComponent } from './dm-table/dm-table.component';
import { TdmTableComponent } from './tdm-table/tdm-table.component';
import { CtfTableComponent } from './ctf-table/ctf-table.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule, MatCheckbox} from '@angular/material/checkbox';
import {MatButtonModule, MatButton} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { PipesModuleModule } from '../pipes-module/pipes-module.module';
import {RouterModule } from '@angular/router'
@NgModule({
  declarations: [
    PlayerTableComponent,
    DmTableComponent,
    TdmTableComponent,
    CtfTableComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatMenuModule,
    PipesModuleModule,
    RouterModule
  ],
  exports: [
    PlayerTableComponent,
    DmTableComponent,
    TdmTableComponent,
    CtfTableComponent,
    CommonModule
  ]
})
export class LeaderboardModule { }
