import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  items = [
    {
      name: 'Fruits',
      items: [
        'apple',
        'banana',
        'kiwi',
        'mango'
      ]
    }, {
      name: 'Car',
      items: [
        'swift dzire',
        'i10 sport',
        'creta',
        'mini cooper'
      ]
    }, {
      name: 'Animal',
      items: [
        'elephant',
        'lion',
        'tiger'
      ]
    }
  ];
  visibleIndex = -1;
  showSubItem(ind) {
    if (this.visibleIndex === ind) {
      this.visibleIndex = -1;
    } else {
      this.visibleIndex = ind;
    }
  }
}
