import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor (public navCtrl : NavController ) {}

  horas32(){

    this.navCtrl.navigateForward("horas32");

  }
  horas64(){

    this.navCtrl.navigateForward("horas64");

  }
  horas96(){

    this.navCtrl.navigateForward("horas96");

  }
  horas128(){

    this.navCtrl.navigateForward("horas128");

  }
  acercade(){

    this.navCtrl.navigateForward("acerca-de");

  }

}
