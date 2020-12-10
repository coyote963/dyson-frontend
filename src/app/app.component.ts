import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'dyson-frontend';

  konami () {
    const audio = new Audio( '../assets/lost.mp3');
    audio.play();
  }

}
