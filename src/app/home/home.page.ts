import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  credits:Array<number> = [];
  mypoints:Array<number> = [];
  favorite
  total_points;
  total_units;
  index;
  units = 0;
  points = 0.00;
  items = [{'class' : 'ion-padding'}];

  constructor(public toastController: ToastController) {}

  addNewCourse() {
    this.items.push({'class' : 'ion-padding'});
  }

  calculateGPA() {
    if(this.total_points && this.total_units){
      this.points =+ this.total_points;
      this.units =+ this.total_units;
    }

    for(var i = 0;i< this.credits.length; i++) {
      if(this.credits[i] && this.mypoints[i]){
        this.units += this.credits[i];
        this.points += Number(this.mypoints[i]) * this.credits[i];
      }  
    } 
  }

  async displayGPA() {
    this.calculateGPA()
    
    if(this.points && this.units){
    const toast = await this.toastController.create({
      message: "GPA: " + (Math.round(this.points)/this.units).toFixed(2),
      duration: 6000
    });
    toast.present()
    }
    else{
      const toast = await this.toastController.create({
        message: "Please fill out all required fields",
        duration: 6000
      });
      toast.present()
    }
    
    this.units = 0;
    this.points = 0.0;
  }
}