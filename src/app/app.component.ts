import { ConfigLoaderService } from './services/config-loader.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProvaSettingsProd';
  constructor( private config: ConfigLoaderService){
   console.log('data ', this.config.configData);
  }


}
