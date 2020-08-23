import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DmlayoutComponent } from './dmlayout/dmlayout.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { PipesModuleModule } from '../pipes-module/pipes-module.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { DmtableComponent } from './dmtable/dmtable.component';
import { DmbadgeComponent } from './dmbadge/dmbadge.component';
import { FavoriteweaponComponent } from './favoriteweapon/favoriteweapon.component';
import { RatinggraphComponent } from './ratinggraph/ratinggraph.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { KilltableComponent } from './killtable/killtable.component';
import { RouterModule } from '@angular/router';
import { MostplayedComponent } from './mostplayed/mostplayed.component';



@NgModule({
  declarations: [DmlayoutComponent, DmtableComponent, DmbadgeComponent, FavoriteweaponComponent, RatinggraphComponent, KilltableComponent, MostplayedComponent],
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
    NgxChartsModule,
    RouterModule
  ]
})
export class DmprofileModule { }
