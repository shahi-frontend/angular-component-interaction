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
  private _customerName: string;

  counterInc(){
    this.count += 1;
  }

  nameChangeDec(nameE){
    this.name = nameE;
    if(nameE === 'Harvey') {
      alert("Welcome back Harvey!");
    }
  }

  get customerName(): string {
    return this._customerName;
  }
  set customerName(value: string){
    this._customerName = value;
    if(value === 'Rachel') {
      alert("Welcome back Rachel!");
    }
  }
}
