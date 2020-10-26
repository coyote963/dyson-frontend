import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdmlayoutComponent } from './tdmlayout/tdmlayout.component';
import {MatCardModule} from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { TdmtableComponent } from './tdmtable/tdmtable.component';
import { PipesModuleModule } from '../pipes-module/pipes-module.module';
import { FavoriteweaponsComponent } from './favoriteweapons/favoriteweapons.component';
import { WinratesComponent } from './winrates/winrates.component';
import { RankbadgeComponent } from './rankbadge/rankbadge.component';
import { KillhistoryComponent } from './killhistory/killhistory.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { RatingchartComponent } from './ratingchart/ratingchart.component'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatchupsComponent } from './matchups/matchups.component';
import { MatIconModule } from '@angular/material/icon';
import { LinksComponent } from './links/links.component';
@NgModule({
  declarations: [
    TdmlayoutComponent,
    TdmtableComponent,
    FavoriteweaponsComponent,
    WinratesComponent,
    RankbadgeComponent,
    KillhistoryComponent,
    RatingchartComponent,
    MatchupsComponent,
    LinksComponent,
  ],
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
    RouterModule,
    NgxChartsModule,
  ],
  exports: [
    TdmlayoutComponent
  ]
})
export class TdmprofileModule { }
