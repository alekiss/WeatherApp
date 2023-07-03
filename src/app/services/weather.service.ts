import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=76c425f83d3dd4a696721e5d4d4cc3fe&units=metric')
  }
}
