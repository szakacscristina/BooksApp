import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';
import { Book, BookGenre} from '../books.models';

@Component({
    selector: 'app-books-edit',
    templateUrl: './books-edit.component.html',
    styleUrls: ['./books-edit.component.css']
})
export class BooksEditComponent implements OnInit {

    private routerLink: string = '../list';

    private bookID: number;

    private isEdit: boolean = false;

    public formGroup: FormGroup;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private booksService: BooksService,
        private formBuilder: FormBuilder) { }

    ngOnInit() {

        this.bookID = parseInt(this.route.snapshot.params['id']);

        if (this.bookID) {
            this.routerLink = '../../list';

            this.booksService.getBook(this.bookID).subscribe(res => {
                this.initForm(res);
                this.isEdit = true;
            });
        }
        else {
            this.initForm(<Book>{});
        }
    }

    save() {
        Object.keys(this.formGroup.controls).forEach(control => {
            this.formGroup.get(control).markAsTouched();
        });

        if (this.formGroup.valid) {
            let book = this.formGroup.value as Book;
            book.bookGenre = BookGenre.Romance;

            if (this.isEdit) {
                book.id = this.bookID;

                this.booksService.modifyBook(book).subscribe(res => {
                    this.router.navigate(['/books']);
                });
            } else {

                this.booksService.saveBook(book).subscribe(res => {
                    this.router.navigate(['/books']);
                });
            }
        }
    }

    initForm(book : Book) {
        this.formGroup = this.formBuilder.group({
            title: [book.title, Validators.required],
            yearOfRelease: [book.yearOfRelease, Validators.required],
            publisher: [book.publisher, Validators.required],
            author: [book.author, [Validators.required]],
            bookGenre: [book.bookGenre, [Validators.required]],
        });
    }

}
















