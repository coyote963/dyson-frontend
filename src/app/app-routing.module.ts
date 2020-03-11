import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DmTableComponent } from './dm-table/dm-table.component';
import { PlayerTableComponent } from './player-table/player-table.component';
import { TdmTableComponent } from './tdm-table/tdm-table.component'
import { CtfTableComponent } from './ctf-table/ctf-table.component';

const routes: Routes = [
  { path: 'dm', component: DmTableComponent },
  { path : '', component: PlayerTableComponent },
  { path : "tdm", component: TdmTableComponent },
  { path : "ctf", component: CtfTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
