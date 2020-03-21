import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PlayerLayoutComponent } from './player-layout/player-layout.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { WeekChartComponent } from './week-chart/week-chart.component';
import { ProfileComponent } from './profile/profile.component';
import { PipesModuleModule } from '../pipes-module/pipes-module.module';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CtfpreviewComponent } from './ctfpreview/ctfpreview.component';
import { DmpreviewComponent } from './dmpreview/dmpreview.component';
import { TdmpreviewComponent } from './tdmpreview/tdmpreview.component'
import { NgxChartsModule } from '@swimlane/ngx-charts'
@NgModule({
  declarations: [PlayerLayoutComponent,
    BarChartComponent,
    WeekChartComponent,
    ProfileComponent,
    CtfpreviewComponent,
    DmpreviewComponent,
    TdmpreviewComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    PipesModuleModule,
    MatButtonModule,
    FlexLayoutModule,
    NgxChartsModule
  ],
  exports: [
    PlayerLayoutComponent
  ]
})
export class DashboardModule { }
