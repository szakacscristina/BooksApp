import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {

    public books: Book[];

  constructor( private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

      http.get<Book[]>(baseUrl + 'api/Books').subscribe(result => {
          this.books = result;

          console.log(this.books)
      }, error => console.error(error));
  }


loadBooks() {
    this.http.get<Book[]>(this.baseUrl + 'api/Books').subscribe(result => {
        this.books = result;
        console.log(this.books);
    }, error => console.error(error))
};

delete (bookId: string) {
    if (confirm('Are you sure you want to delete the book with id ' + bookId + '?')) {
        this.http.delete(this.baseUrl + 'api/Books/' + bookId)
            .subscribe
            (
                result => {
                    alert('Book successfully deleted!');
                    this.loadBooks();
                },
                error => alert('Cannot delete book - maybe it has reviews?')
            )
    }
}
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
