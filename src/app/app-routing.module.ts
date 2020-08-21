import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DmTableComponent } from './leaderboard/dm-table/dm-table.component';
import { PlayerTableComponent } from './leaderboard/player-table/player-table.component';
import { TdmTableComponent } from './leaderboard/tdm-table/tdm-table.component'
import { CtfTableComponent } from './leaderboard/ctf-table/ctf-table.component';
import { AboutComponent } from './about/about.component';
import { PlayerLayoutComponent } from './dashboard/player-layout/player-layout.component';
import { TdmlayoutComponent } from './tdmprofile/tdmlayout/tdmlayout.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path : "player/:playerId", component: PlayerLayoutComponent},
  { path: "tdm/:playerId", component: TdmlayoutComponent },
  { path: 'dm', component: DmTableComponent },
  { path : '', component: PlayerTableComponent },
  { path : "tdm", component: TdmTableComponent },
  { path : "ctf", component: CtfTableComponent },
  { path : "about", component: AboutComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
