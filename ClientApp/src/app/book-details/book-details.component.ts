import { Component, OnInit, Inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

    private book: BookWithDetails;

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string,
        private route: ActivatedRoute)
        {
    }

    loadBook(bookId: string) {
        this.http.get<BookWithDetails>(this.baseUrl + 'api/Books/' + bookId).subscribe(result => {
            this.book = result;
            console.log(this.book);
        }, error => console.error(error))
    }


    ngOnInit() {

        this.route.paramMap.subscribe(params => {
            this.loadBook(params.get('bookId'));

        } )

      
  }

}

interface Review {
    text: string;
    bookId: number;
}

interface BookWithDetails
{
title: string;
yearOfRelease: number;
publisher: string;
author: string;
    bookGenre: string;
    reviews: Review[];

}

