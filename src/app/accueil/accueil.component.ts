import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e8e882caea981de520578b860d237d19';
  display: any;

  constructor(private meteo: HttpClient) { }

  ngOnInit(): void {
  }

  getWeather(): void{
    this.meteo.get(this.url).subscribe(
      (data) => {
        console.log(data);
        this.display = data;
      },
      (error) => {
        console.log('Error' + error);
      }
    );
  }

}
