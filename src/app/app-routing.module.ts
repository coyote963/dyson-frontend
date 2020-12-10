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
import { CtflayoutComponent } from './ctfprofile/ctflayout/ctflayout.component';
import { DmlayoutComponent } from './dmprofile/dmlayout/dmlayout.component';
import { ClimblistComponent } from './clbprofile/climblist/climblist.component';
import { GlobalchatComponent } from './globalchat/global/globalchat.component';
import { PrivatechatComponent } from './globalchat/private/privatechat.component';
import { InboxComponent } from './globalchat/inbox/inbox.component';
import { NavMenuComponentComponent } from './shared/nav-menu-component/nav-menu-component.component';
import { HomepageComponent } from './shared/homepage/homepage.component';
import { ClanIndexComponent } from './clan/clan-index/clan-index.component'
import { ClanDetailLayoutComponent } from './clan/clan-detail-layout/clan-detail-layout.component';
const routes: Routes = [
  { path: '', component: HomepageComponent},
  {
    path: '',
    component: NavMenuComponentComponent,
    children: [
      { path : "player/:playerId", component: PlayerLayoutComponent},
      { path: "tdm/:playerId", component: TdmlayoutComponent },
      { path: 'dm', component: DmTableComponent },
      { path : 'players', component: PlayerTableComponent },
      { path : "tdm", component: TdmTableComponent },
      { path : "ctf", component: CtfTableComponent },
      { path : "about", component: AboutComponent },
      { path: 'ctf/:playerId', component: CtflayoutComponent},
      { path: 'dm/:playerId', component: DmlayoutComponent },
      { path: 'clb', component: ClimblistComponent },
      { path: 'chat', component: GlobalchatComponent },
      { path: 'chat/:playerId', component: PrivatechatComponent},
      { path: 'inbox', component: InboxComponent},
      { path: 'clan', component: ClanIndexComponent},
      { path: 'clan/:clanId', component: ClanDetailLayoutComponent},
      { path: "**", component: NotFoundComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
