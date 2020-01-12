import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items = [{'class' : 'ion-padding'}];
  constructor() {

  }
  addNewCourse() {
    this.items.push({'class' : 'ion-padding'});
}
  
}


