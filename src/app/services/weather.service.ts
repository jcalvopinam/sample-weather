import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  consumeApiWeather(city:string) : Observable<any> {
    return this.http
      .get('http://api.openweathermap.org/data/2.5/weather?q=%27' + city +'%27&APPID=2f733ac74988538b834072348b43c61c&units=metric')
      .map(response => response.json())
      .catch(error => {
        console.log('error: ' + error);
        return Observable.throw(error.json());
    });
  }

}
