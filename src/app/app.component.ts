import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';

  myWeather: any;
  temperature: number = 0;
  iconURL: string = '';
  city: string = 'João Pessoa';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.city)
    this.city = ''
  }

  onSubmit() {
    this.getWeatherData(this.city)
    this.city = ''
  }

  private getWeatherData(city: string) {
    this.weatherService.getWeather(city).subscribe({
      next: (res) => {
        console.log(res);
        this.myWeather = res;
        console.log(this.myWeather)
        this.temperature = this.myWeather.main.temp
        this.iconURL = 'https://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '@2x.png'
        this.city = this.myWeather.name
      },

      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed'),
    });
  }
}
