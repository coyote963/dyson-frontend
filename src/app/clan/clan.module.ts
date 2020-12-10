import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanIndexComponent } from './clan-index/clan-index.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { PipesModuleModule } from '../pipes-module/pipes-module.module';
import { RouterModule } from '@angular/router';
import { ClanDetailComponent } from './clan-detail/clan-detail.component';
import { ClanLeaderboardComponent } from './clan-leaderboard/clan-leaderboard.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { ClanWallComponent } from './clan-wall/clan-wall.component';
import { FormsModule } from '@angular/forms';
import { ClanDetailLayoutComponent } from './clan-detail-layout/clan-detail-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [ClanIndexComponent, ClanDetailComponent, ClanLeaderboardComponent, ClanWallComponent, ClanDetailLayoutComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatIconModule,
    LayoutModule,
    FormsModule,
    PipesModuleModule,
    RouterModule,
    MatTableModule,
    MatTabsModule,
    FlexLayoutModule,
    MatFormFieldModule
  ]
})
export class ClanModule { }
