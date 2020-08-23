import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPipe } from './color.pipe'
import {PremiumPipe } from './premium.pipe'
import { PlatformPipe } from './platform.pipe'
import { LastnamePipe } from './lastname.pipe';
import { AlternateNamesPipe } from './alternate-names.pipe';
import { TimestampPipe } from './timestamp.pipe';
import { ClimbtimePipe } from './climbtime.pipe';
import { MapidPipe } from './mapid.pipe'



@NgModule({
  declarations: [
    ColorPipe,
    PremiumPipe,
    PlatformPipe,
    LastnamePipe,
    AlternateNamesPipe,
    TimestampPipe,
    ClimbtimePipe,
    MapidPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ColorPipe,
    PremiumPipe,
    PlatformPipe,
    LastnamePipe,
    AlternateNamesPipe,
    TimestampPipe,
    ClimbtimePipe,
    MapidPipe
  ]
})
export class PipesModuleModule { }
