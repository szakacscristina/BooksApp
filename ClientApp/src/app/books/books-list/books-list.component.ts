import { Component, OnInit } from '@angular/core';

import { Book } from '../books.models';
import { BooksService } from '../books.service';
//import { PaginatedMovies } from '../paginatedMovies.models';
//import { PageEvent } from '@angular/material/paginator';

@Component({
    selector: 'app-books-list',
    templateUrl: './books-list.component.html',
    styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

    public displayedColumns: string[] = ['title', 'yearOfRelease', 'publisher', 'author', 'bookGenre', 'numberOfReviews', 'action'];
    public books: Book[];

    //public dataSource;
    //public isloading = false;
   // public movies: PaginatedMovies;
   // public pageEvent: PageEvent;

    constructor(private booksService: BooksService) {
    }

    ngOnInit() {
        this.loadBooks();
    }

    loadBooks() {
        this.booksService.listBooks().subscribe(res => {
            this.books = res;
})
    }

    deleteBook(book : Book) {
        this.booksService.deleteBook(book.id).subscribe(x => {
            this.loadBooks();
        });
    }

}
