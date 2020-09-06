import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Config } from '../models/config.model';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ConfigLoaderService {

  public configData: Config = { DbConnect: 'not available yet'};

  constructor(private httpClient: HttpClient) { }

  initialize(): Promise<Config> {
    return this.httpClient.get<Config>('./assets/config.json')
    .pipe( tap((response: Config) => {
      this.configData = response;
    })).toPromise<Config>();


  }
}
