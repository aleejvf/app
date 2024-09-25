import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
export class MainPage {

  constructor(private navCtrl: NavController) {}

  goToProfileUs(route: string) {
    this.navCtrl.navigateForward(`/${route}`);  // Redirige a la ruta pasada como argumento
  }
}