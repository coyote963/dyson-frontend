import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'platform'
})
export class PlatformPipe implements PipeTransform {

  transform(value: string): string {
    if (value === "0") {
      return "Steam"
    } else if (value === "1" ) {
      return "Discord"
    } else if (value === "2" ) {
      return "Itch.io"
    } else {
      return "Gamejolt"
    }
  }
}
