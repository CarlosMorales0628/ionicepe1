import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {NavController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-horas128',
  templateUrl: './horas128.page.html',
  styleUrls: ['./horas128.page.scss'],
})
export class Horas128Page implements OnInit {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public toast: ToastController) { }
  EPE1 : any;
  EPE2 : any;
  EPE3 : any;
  EPE4 : any;
  Eva1 : any;
  Eva2 : any;
  Eva3 : any;
  Eva4 : any;

  np: any;


  form: any;
  na: any;
  nm: any;
  
  async alerta128() {

    this.np = ((this.EPE1 * 0.1) + (this.EPE2 * 0.15) + (this.EPE3 * 0.25)+(this.EPE4*0.25) + (this.Eva1 * 0.05) + (this.Eva2 * 0.05) + (this.Eva3 * 0.05)+(this.Eva4*0.1));
    var evas = ((parseInt(this.Eva1) + parseInt(this.Eva2) + parseInt(this.Eva3) + parseInt(this.Eva4))/ 4)

    this.na = ((this.np * 70) / 100)
    this.form = (4.0 - (this.na))
    this.nm = ((this.form) / 0.3)

    if (this.EPE1 <= 7.0 && this.EPE2 <= 7.0 && this.EPE3 <= 7.0 && this.EPE4 <= 7.0 && this.Eva1 <= 7.0 && this.Eva2 <= 7.0 && this.Eva3 <= 7.0 && this.Eva4 <= 7.0 && this.EPE1 >= 1.0 && this.EPE2 >= 1.0 && this.EPE3 >= 1.0 && this.EPE4 >= 1.0 && this.Eva1 >= 1.0 && this.Eva2 >= 1.0 && this.Eva3 >= 1.0 && this.Eva4 >=1.0) {
      if (this.EPE1 >= 4.0 && this.EPE2 >= 4.0 && this.EPE3 >= 4.0 && this.EPE4 >= 4.0 && evas >= 4.0) {
        if (this.np >= 5.5) {
          const alert = await this.alertCtrl.create({
            header: 'Concentracion de NOTAS',
            subHeader: 'Resultados:',
            message: 'Promedio Final:' + this.np.toFixed(1) + '<br>' + 'Felicidades, estas eximido.',
            buttons: ['Ok']
          });
          alert.present();
        } else {
           
          const alert = await this.alertCtrl.create({
            header: 'Concentracion de NOTAS',
            subHeader: 'Resultados:',
            message: 'Nota de presentacion:' + this.np.toFixed(1) + '<br>' + 'Nota minima de aprobacion:' + this.nm.toFixed(1),
            buttons: ['Ok']
          });
          alert.present();
         }
      } else {
        const alert = await this.alertCtrl.create({
          header: 'Concentracion de NOTAS',
          subHeader: 'Resultados:',
          message:'Nota de presentacion:' + this.np.toFixed(1) + '<br>' + 'Nota minima de aprobacion:' + this.nm.toFixed(1),
          buttons: ['Ok']
        });
        alert.present();
      }
    } else {
      const toast = await this.toast.create({
        message: 'Las notas no pueden ser mas altas que 7.0 ni mas bajas que 1.0',
        showCloseButton: true,
        position: "middle",
        closeButtonText: "OK"
      });
      toast.present();
    }
  }

  horas128ex() {
    this.navCtrl.navigateForward("horas128ex");
  }

  volverinicio() {
    this.navCtrl.navigateForward("home")
  }

  ngOnInit() {
  }


}
