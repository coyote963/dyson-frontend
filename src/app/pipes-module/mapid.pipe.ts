import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapid'
})
export class MapidPipe implements PipeTransform {

  transform(map_path: string, ...args: unknown[]): string {
    return map_path.split('\\')[2]
  }

}
