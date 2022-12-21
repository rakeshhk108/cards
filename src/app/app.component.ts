import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
      title: 'Neat Tree',
      ImageUrl:'assets/tree.jpeg',
      userName: '@nature',
      content: 'I saw this neat tree today'

    },
    {
      title: 'Green Mountain',
      ImageUrl:'assets/mountain.jpeg',
      userName: '@MontaingMan',
      content: 'I am a mountain person'

    },
    {
      title: 'Mountain Biking',
      ImageUrl:'assets/biking.jpeg',
      userName: '@MountBicker',
      content: 'The Balance in my life comes on the montains'

    }
  ];
}
