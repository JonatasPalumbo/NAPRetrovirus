import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
import { Component } from "@angular/core/";

@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
})
export class MapaPage {
  map: GoogleMap;
  constructor() { }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: -23.5489,
           lng: -46.6388
         },
         zoom: 15,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: -23.5489,
        lng: -46.6388
      }
    });
  }  
}
