import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title: string = 'Angular Component Interaction';
  imgUrl: string = 'https://www.gstatic.com/webp/gallery/5.jpg';
  count: number = 0;
  name: string;

  counterInc(){
    this.count += 1;
  }

  nameChangeDec(nameE){
    this.name = nameE;
    if(nameE === 'Harvey') {
      alert("Welcome back Harvey!");
    }
  }
}
