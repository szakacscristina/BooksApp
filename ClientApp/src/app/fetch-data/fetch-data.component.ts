import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Book } from '../books/books.models';

@Component({
    selector: 'app-fetch-data',
    templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
    public books: Book[];

    public name: string = "test";

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
        this.loadBooks();
    }


    loadBooks() {
        this.http.get<Book[]>(this.baseUrl + 'api/Books').subscribe(result => {
            this.books = result;
            console.log(this.books);
        }, error => console.error(error))
    };

    delete(bookId: string) {
        if (confirm('Are you sure you want to delete the book with id ' + bookId + '?')) {
            this.http.delete(this.baseUrl + 'api/Books/' + bookId)
                .subscribe
                (
                    result => {
                        alert('Book successfully deleted!');
                        this.loadBooks();
                    },
                    error => alert('Cannot delete book - maybe it has comments?')
                )
        }
    }

    submit() {

        var book: Book = <Book>{};
        book.title = this.name;
        book.yearOfRelease = 2006;
        book.publisher = this.name;
        book.author = this.name;
        book.bookGenre = BookGenre.Romance;

        this.http.post(this.baseUrl + 'api/Books', book).subscribe(result => {
            console.log('success!');
            this.loadBooks();
        },
            error => {
                if (error.status == 400) {
                    console.log(error.error.errors)
                }
            });
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
    Romance = 0,
    Fantasy = 1,
    Science = 2,
    Mistery = 3,
    Action = 4
}
