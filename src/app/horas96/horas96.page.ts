import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {NavController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-horas96',
  templateUrl: './horas96.page.html',
  styleUrls: ['./horas96.page.scss'],
})
export class Horas96Page implements OnInit {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public toast: ToastController) { }
  
  EPE1: any;
  EPE2: any;
  EPE3: any;
  Eva1: any;
  Eva2: any;
  Eva3: any;

  np: any;

  form: any;
  na: any;
  nm: any;

  async alerta96() {
    this.np = ((this.EPE1 * 0.1) + (this.EPE2 * 0.2) + (this.EPE3 * 0.3) + (this.Eva1 * 0.1) + (this.Eva2 * 0.1) + (this.Eva3 * 0.2));
    var evas = ((parseInt(this.Eva1) + parseInt(this.Eva2) + parseInt(this.Eva3)) / 3)

    this.na = ((this.np * 70) / 100)
    this.form = (4.0 - (this.na))
    this.nm = ((this.form) / 0.3)


    if (this.EPE1 <= 7.0 && this.EPE2 <= 7.0 && this.EPE3 <= 7.0 && this.Eva1 <= 7.0 && this.Eva2 <= 7.0 && this.Eva3 <= 7.0 && this.EPE1 >= 1.0 && this.EPE2 >= 1.0 && this.EPE3 >= 1.0 && this.Eva1 >= 1.0 && this.Eva2 >= 1.0 && this.Eva3 >= 1.0) {
      if (this.EPE1 >= 4.0 && this.EPE2 >= 4.0 && this.EPE3 >= 4.0 && evas >= 4.0) {
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
          message: 'Nota de presentacion:' + this.np.toFixed(1) + '<br>' + 'Nota minima de aprobacion:' + this.nm.toFixed(1),
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


  horas96ex() {
    this.navCtrl.navigateForward("horas96ex");
  }

  volverinicio() {
    this.navCtrl.navigateForward("home")
  }

  ngOnInit() {
  }

}
