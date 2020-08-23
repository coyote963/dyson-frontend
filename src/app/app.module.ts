import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeaderboardModule } from './leaderboard/leaderboard.module'
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router'
import { TdmprofileModule } from './tdmprofile/tdmprofile.module';
import { CtfprofileModule } from './ctfprofile/ctfprofile.module'
import { DmprofileModule } from './dmprofile/dmprofile.module'
import { ClbprofileModule } from './clbprofile/clbprofile.module'
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
  ],
  imports: [
    AppRoutingModule,
    LeaderboardModule,
    DashboardModule,
    TdmprofileModule,
    BrowserModule,
    CommonModule,
    SharedModule,
    RouterModule,
    CtfprofileModule,
    DmprofileModule,
    ClbprofileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
