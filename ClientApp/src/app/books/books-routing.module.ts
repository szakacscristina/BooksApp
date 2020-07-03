import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books.component';
import { BooksEditComponent } from './books-edit/books-edit.component';
import { BooksListComponent } from './books-list/books-list.component';

const routes: Routes = [
    {
        path: '', component: BooksComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: BooksListComponent },
            { path: 'edit/:id', component: BooksEditComponent },
            { path: 'edit', component: BooksEditComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BooksRoutingModule {
    static routedComponents = [BooksComponent, BooksListComponent, BooksEditComponent];
}
