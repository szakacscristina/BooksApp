import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Book } from './books.models';
import { ApplicationService } from '../core/services/application.service';
//import { PaginatedMovies } from './paginatedMovies.models';
import { PageEvent } from '@angular/material/paginator';


@Injectable()
export class BooksService {
    filter: any;

    constructor(
        private http: HttpClient,
        private applicationService: ApplicationService) { }

    getBook(id: number) {
        return this.http.get<Book>(`${this.applicationService.baseUrl}api/Books/${id}`);
    }

    //listBooks(event?: PageEvent) {

    //    let pageIndex = event ? event.pageIndex + "" : "0";
    //    let itemsPerPage = event ? event.pageSize + "" : "25";
    //    console.log(event);
    //    let params = new HttpParams().set("page", pageIndex).set("itemsPerPage", itemsPerPage); //Create new HttpParams
    //    return this.http.get<PaginatedMovies>(`${this.applicationService.baseUrl}api/Movies`, { params: params });
    //}

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

