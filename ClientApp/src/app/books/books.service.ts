import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Book } from './books.models';
import { ApplicationService } from '../core/services/application.service';



@Injectable()
export class BooksService {
    constructor(
        private http: HttpClient,
        private applicationService: ApplicationService) { }

    getBook(id: number) {
        return this.http.get<Book>(`${this.applicationService.baseUrl}api/Books/${id}`);
    }

    listBooks() {
        return this.http.get<Book[]>(`${this.applicationService.baseUrl}api/Books`);
    }

    saveBook(book: Book) {
        return this.http.post(`${this.applicationService.baseUrl}api/Books`, book);

    }

    modifyBook(book: Book) {
        return this.http.put(`${this.applicationService.baseUrl}api/Books/${book.id}`, book);
    }

    deleteBook(id: number) {
        return this.http.delete<any>(`${this.applicationService.baseUrl}api/Books/${id}`);
    }
}

