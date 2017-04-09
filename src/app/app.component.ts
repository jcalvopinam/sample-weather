import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Weather } from './domain/weather'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeatherService]
})

export class AppComponent {
  title = 'Checks the Weather!';
  city: string = '';
  weather: Weather = new Weather('','',0);
  visibilityResponse : boolean = false;

  constructor(public weatherService:WeatherService){
  }

  cleanAll() {
    this.city = '';
    this.weather = new Weather('','',0);
    this.visibilityResponse = false;
    console.log("Cleaned all data");
  }

  searchCity() {
    console.log("City to search: " + this.city);
    this.consumeApiWeather();
  }

  consumeApiWeather() {
    this.visibilityResponse = true;
    this.weatherService.consumeApiWeather(this.city).subscribe(
      data => {
        const weatherResult = new Weather(data.name, data.sys.country, data.main.temp);
        this.weather = weatherResult;
        console.log('visibility: ' + this.visibilityResponse + ' weather: ' + JSON.stringify(weatherResult));
      }, err => {
        this.visibilityResponse = false;
        console.log('visibility: ' + this.visibilityResponse + 'city not found');
      });
  }

}