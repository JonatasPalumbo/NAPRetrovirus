import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NoticiasPage } from '../pages/noticias/noticias';
import { EventosPage } from '../pages/eventos/eventos';
import { MapaPage } from '../pages/mapa/mapa';
import { ContatoPage } from '../pages/contato/contato';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { HIVPage } from '../pages/h-iv/h-iv';
import { HTLVPage } from '../pages/h-tlv/h-tlv';
import { RetrovRusEndGenosPage } from '../pages/retrov-rus-end-genos/retrov-rus-end-genos';
import { LinksTeisPage } from '../pages/links-teis/links-teis';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    NoticiasPage,
    EventosPage,
    MapaPage,
    ContatoPage,
    TabsControllerPage,
    HIVPage,
    HTLVPage,
    RetrovRusEndGenosPage,
    LinksTeisPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NoticiasPage,
    EventosPage,
    MapaPage,
    ContatoPage,
    TabsControllerPage,
    HIVPage,
    HTLVPage,
    RetrovRusEndGenosPage,
    LinksTeisPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}