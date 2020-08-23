import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'climbtime'
})
export class ClimbtimePipe implements PipeTransform {

  transform(time: number, ...args: unknown[]): string {
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;
    var seconds_display = seconds.toString();
    if (seconds < 10) {
      seconds_display = '0' + seconds_display
    }
    return `[${minutes}:${seconds_display}]`
  }

}