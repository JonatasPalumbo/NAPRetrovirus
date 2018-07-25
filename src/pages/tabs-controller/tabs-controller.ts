import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoticiasPage } from '../noticias/noticias';
import { EventosPage } from '../eventos/eventos';
import { MapaPage } from '../mapa/mapa';
import { ContatoPage } from '../contato/contato';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = NoticiasPage;
  tab2Root: any = EventosPage;
  tab3Root: any = MapaPage;
  tab4Root: any = ContatoPage;
  constructor(public navCtrl: NavController) {
  }
  goToEventos(params){
    if (!params) params = {};
    this.navCtrl.push(EventosPage);
  }
}
