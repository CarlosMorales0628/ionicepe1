import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage implements OnInit {

  constructor(public navCtrl : NavController) { }

  home(){

    this.navCtrl.navigateForward("home");

  }

  ngOnInit() {
  }

}
