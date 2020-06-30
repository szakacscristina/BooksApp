import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
    public forecasts: WeatherForecast[];

    public books: Book[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));

      http.get<Book[]>(baseUrl + 'api/Books').subscribe(result => {
          this.books = result;

          console.log(this.books)
      }, error => console.error(error));
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

 
interface Book {

    title: string;
    yearOfRelease: number;
    publisher: string;
    author: string;
    bookGenre: BookGenre;

}

 enum BookGenre {
    Romance =0,
    Fantasy=1,
    Science=2,
    Mistery=3,
    Action=4
}
