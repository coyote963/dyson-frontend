import { NgModule } from '@angular/core';
import { GlobalchatComponent} from './global/globalchat.component'
import {MatButtonModule, MatButton} from '@angular/material/button';
import { CommonModule} from '@angular/common'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {PrivatechatComponent} from './private/privatechat.component';
import { InboxComponent } from './inbox/inbox.component'
import {MatTableModule} from '@angular/material/table';
@NgModule({
    declarations: [
      GlobalchatComponent,
      PrivatechatComponent,
      InboxComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      MatButtonModule,
      MatInputModule,
      MatFormFieldModule,
      MatTableModule,
    ],
    exports: [
      GlobalchatComponent,
      CommonModule,
      PrivatechatComponent
    ]
  })
  export class GlobalchatModule { }
  