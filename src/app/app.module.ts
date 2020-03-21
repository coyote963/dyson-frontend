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

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
  ],
  imports: [
    AppRoutingModule,
    LeaderboardModule,
    DashboardModule,
    BrowserModule,
    CommonModule,
    SharedModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
