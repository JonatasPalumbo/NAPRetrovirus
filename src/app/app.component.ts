import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HIVPage } from '../pages/h-iv/h-iv';
import { HTLVPage } from '../pages/h-tlv/h-tlv';
import { RetrovRusEndGenosPage } from '../pages/retrov-rus-end-genos/retrov-rus-end-genos';
import { LinksTeisPage } from '../pages/links-teis/links-teis';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = TabsControllerPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHIV(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HIVPage);
  }goToHTLV(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HTLVPage);
  }goToRetrovRusEndGenos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RetrovRusEndGenosPage);
  }goToLinksTeis(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LinksTeisPage);
  }goToNoticias(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TabsControllerPage);
  }
}
