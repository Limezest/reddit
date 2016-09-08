import { Component } from '@angular/core';

@Component({
  selector: 'my-card',
  templateUrl: 'myCard.component.html'
})
export class MyCardComponent {
  data: any;

  constructor(private params: any) {
    this.data = params;
  }
}